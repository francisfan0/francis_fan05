"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createClient, RealtimeChannel } from "@supabase/supabase-js";
import "./InitialsGame.css";

type GamePhase =
  | "waiting"
  | "letter_pick"
  | "racing"
  | "voting"
  | "round_result"
  | "game_over";

interface GameRoom {
  id: string;
  code: string;
  host_id: string;
  host_username: string;
  guest_id: string | null;
  guest_username: string | null;
  host_score: number;
  guest_score: number;
  phase: GamePhase;
  host_letter: string | null;
  guest_letter: string | null;
  initials: string | null;
  proposed_name: string | null;
  proposer: "host" | "guest" | null;
  host_vote: "yes" | "no" | null;
  guest_vote: "yes" | "no" | null;
  host_wants_skip: boolean;
  guest_wants_skip: boolean;
  round_number: number;
  max_rounds: number;
  last_round_result: string | null;
  racing_started_at: string | null;
  updated_at: string;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getSupabase = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
};

const generateCode = () =>
  Math.random().toString(36).substring(2, 7).toUpperCase();

const InitialsGame = () => {
  const supabase = useRef(getSupabase());

  const [username, setUsername] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [showJoin, setShowJoin] = useState(false);
  const [room, setRoom] = useState<GameRoom | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [maxRoundsInput, setMaxRoundsInput] = useState("10");

  const channelRef = useRef<RealtimeChannel | null>(null);
  const playerIdRef = useRef<string>("");
  const roomRef = useRef<GameRoom | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let id = sessionStorage.getItem("initials_player_id");
      if (!id) {
        id =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem("initials_player_id", id);
      }
      playerIdRef.current = id;
    }
  }, []);

  useEffect(() => {
    roomRef.current = room;
  }, [room]);

  const isHost = room?.host_id === playerIdRef.current;

  const subscribeToRoom = useCallback((roomId: string) => {
    if (!supabase.current) return;
    if (channelRef.current) {
      supabase.current.removeChannel(channelRef.current);
    }
    const channel = supabase.current
      .channel(`room_${roomId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "initials_game_rooms",
          filter: `id=eq.${roomId}`,
        },
        (payload: { new: GameRoom }) => {
          setRoom(payload.new as GameRoom);
        }
      )
      .subscribe();
    channelRef.current = channel;
  }, []);

  useEffect(() => {
    return () => {
      if (supabase.current && channelRef.current) {
        supabase.current.removeChannel(channelRef.current);
      }
    };
  }, []);

  const updateRoom = useCallback(
    async (updates: Partial<GameRoom>) => {
      if (!roomRef.current || !supabase.current) return;
      const { data, error: err } = await supabase.current
        .from("initials_game_rooms")
        .update(updates)
        .eq("id", roomRef.current.id)
        .select()
        .single();
      if (!err && data) setRoom(data as GameRoom);
    },
    []
  );

  const advanceRound = useCallback(
    async (result?: string) => {
      const r = roomRef.current;
      if (!r || !supabase.current) return;
      const nextRound = r.round_number + 1;
      const isOver = nextRound >= r.max_rounds;
      await updateRoom({
        phase: isOver ? "game_over" : "letter_pick",
        round_number: nextRound,
        host_letter: null,
        guest_letter: null,
        initials: null,
        proposed_name: null,
        proposer: null,
        host_vote: null,
        guest_vote: null,
        host_wants_skip: false,
        guest_wants_skip: false,
        last_round_result: result ?? r.last_round_result,
        racing_started_at: null,
      });
    },
    [updateRoom]
  );

  // Host: transition letter_pick → racing when both letters are set
  useEffect(() => {
    if (!room || !isHost || room.phase !== "letter_pick") return;
    if (room.host_letter && room.guest_letter) {
      const swap = Math.random() < 0.5;
      const initials = swap
        ? `${room.guest_letter}.${room.host_letter}.`
        : `${room.host_letter}.${room.guest_letter}.`;
      updateRoom({ phase: "racing", initials, racing_started_at: new Date().toISOString() });
    }
  }, [room?.host_letter, room?.guest_letter, room?.phase, isHost, updateRoom]);

  // Host: resolve voting when both votes are in
  useEffect(() => {
    if (!room || !isHost || room.phase !== "voting") return;
    if (room.host_vote && room.guest_vote) {
      const bothYes = room.host_vote === "yes" && room.guest_vote === "yes";
      if (bothYes) {
        const proposerName =
          room.proposer === "host" ? room.host_username : room.guest_username;
        const newScores: Partial<GameRoom> = {};
        if (room.proposer === "host") newScores.host_score = room.host_score + 1;
        else newScores.guest_score = room.guest_score + 1;
        updateRoom({
          ...newScores,
          phase: "round_result",
          last_round_result: `✓ Point to ${proposerName}! "${room.proposed_name}" accepted.`,
        });
      } else {
        // Someone voted no — keep same initials, go back to racing
        updateRoom({
          phase: "racing",
          proposed_name: null,
          proposer: null,
          host_vote: null,
          guest_vote: null,
          racing_started_at: new Date().toISOString(),
        });
      }
    }
  }, [room?.host_vote, room?.guest_vote, room?.phase, isHost, updateRoom]);

  // Host: both players want to skip → new initials, same round number
  useEffect(() => {
    if (!room || !isHost || room.phase !== "racing") return;
    if (room.host_wants_skip && room.guest_wants_skip) {
      updateRoom({
        phase: "letter_pick",
        host_letter: null,
        guest_letter: null,
        initials: null,
        proposed_name: null,
        proposer: null,
        host_vote: null,
        guest_vote: null,
        host_wants_skip: false,
        guest_wants_skip: false,
        racing_started_at: null,
      });
    }
  }, [room?.host_wants_skip, room?.guest_wants_skip, room?.phase, isHost, updateRoom]);

  // Host: auto-advance from round_result after 4 seconds
  useEffect(() => {
    if (!room || !isHost || room.phase !== "round_result") return;
    const timer = setTimeout(() => advanceRound(), 4500);
    return () => clearTimeout(timer);
  }, [room?.phase, room?.round_number, isHost, advanceRound]);


  const createRoom = async () => {
    if (!username.trim()) { setError("Enter a username first"); return; }
    if (!supabase.current) { setError("Supabase not configured — see setup instructions."); return; }
    setIsLoading(true);
    setError("");
    const code = generateCode();
    const maxR = Math.max(1, Math.min(30, parseInt(maxRoundsInput) || 10));
    const { data, error: err } = await supabase.current
      .from("initials_game_rooms")
      .insert({
        code,
        host_id: playerIdRef.current,
        host_username: username.trim(),
        max_rounds: maxR,
      })
      .select()
      .single();
    setIsLoading(false);
    if (err) { setError(err.message); return; }
    setRoom(data as GameRoom);
    subscribeToRoom((data as GameRoom).id);
  };

  const joinRoom = async () => {
    if (!username.trim()) { setError("Enter a username first"); return; }
    if (!joinCode.trim()) { setError("Enter a room code"); return; }
    if (!supabase.current) { setError("Supabase not configured."); return; }
    setIsLoading(true);
    setError("");
    const { data: existing, error: fetchErr } = await supabase.current
      .from("initials_game_rooms")
      .select()
      .eq("code", joinCode.toUpperCase().trim())
      .single();
    if (fetchErr || !existing) {
      setIsLoading(false);
      setError("Room not found. Check the code and try again.");
      return;
    }
    if (existing.guest_id && existing.guest_id !== playerIdRef.current) {
      setIsLoading(false);
      setError("Room is already full.");
      return;
    }
    const { data, error: updateErr } = await supabase.current
      .from("initials_game_rooms")
      .update({ guest_id: playerIdRef.current, guest_username: username.trim() })
      .eq("id", existing.id)
      .select()
      .single();
    setIsLoading(false);
    if (updateErr) { setError(updateErr.message); return; }
    setRoom(data as GameRoom);
    subscribeToRoom((data as GameRoom).id);
  };

  const startGame = () =>
    updateRoom({ phase: "letter_pick", round_number: 0, host_score: 0, guest_score: 0 });

  const pickLetter = (letter: string) => {
    if (!room) return;
    const myLetter = isHost ? room.host_letter : room.guest_letter;
    if (myLetter) return;
    updateRoom(isHost ? { host_letter: letter } : { guest_letter: letter });
  };

  const submitName = async () => {
    if (!room || !nameInput.trim() || room.proposed_name) return;
    await updateRoom({
      proposed_name: nameInput.trim(),
      proposer: isHost ? "host" : "guest",
      phase: "voting",
      // Proposer automatically votes yes — they wouldn't submit a name they don't know
      host_vote: isHost ? "yes" : null,
      guest_vote: !isHost ? "yes" : null,
    });
    setNameInput("");
  };

  const requestSkip = () => {
    if (!room) return;
    updateRoom(isHost ? { host_wants_skip: true } : { guest_wants_skip: true });
  };

  const castVote = (vote: "yes" | "no") => {
    if (!room) return;
    updateRoom(isHost ? { host_vote: vote } : { guest_vote: vote });
  };

  const resetGame = () => {
    if (!room || !isHost) return;
    updateRoom({
      phase: "waiting",
      host_score: 0,
      guest_score: 0,
      round_number: 0,
      host_letter: null,
      guest_letter: null,
      initials: null,
      proposed_name: null,
      proposer: null,
      host_vote: null,
      guest_vote: null,
      host_wants_skip: false,
      guest_wants_skip: false,
      last_round_result: null,
      guest_id: null,
      guest_username: null,
      racing_started_at: null,
    });
  };

  const playAgain = () => {
    if (!room || !isHost) return;
    updateRoom({
      phase: "waiting",
      host_score: 0,
      guest_score: 0,
      round_number: 0,
      host_letter: null,
      guest_letter: null,
      initials: null,
      proposed_name: null,
      proposer: null,
      host_vote: null,
      guest_vote: null,
      host_wants_skip: false,
      guest_wants_skip: false,
      last_round_result: null,
      racing_started_at: null,
    });
  };

  const copyCode = () => {
    if (!room) return;
    navigator.clipboard.writeText(room.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const myLetter = room ? (isHost ? room.host_letter : room.guest_letter) : null;
  const myVote = room ? (isHost ? room.host_vote : room.guest_vote) : null;
  const mySkipRequest = room
    ? isHost
      ? room.host_wants_skip
      : room.guest_wants_skip
    : false;

  // ── No Supabase configured ──────────────────────────────────────────────────
  if (!supabase.current) {
    return (
      <div className="ig-container">
        <div className="ig-setup-card">
          <div className="ig-setup-icon">⚙️</div>
          <h2>Setup Required</h2>
          <p>
            This game needs Supabase for real-time multiplayer. Add these to
            your <code>.env</code> file and run the schema:
          </p>
          <pre className="ig-code-block">{`NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key`}</pre>
          <p className="ig-setup-hint">
            Then run <code>supabase/schema.sql</code> in your Supabase SQL
            editor to create the game table.
          </p>
        </div>
      </div>
    );
  }

  // ── Lobby ───────────────────────────────────────────────────────────────────
  if (!room) {
    return (
      <div className="ig-container">
        <div className="ig-lobby-card">
          <div className="ig-logo">
            <span className="ig-logo-letter">A</span>
            <span className="ig-logo-dot">.</span>
            <span className="ig-logo-letter ig-logo-letter2">B</span>
            <span className="ig-logo-dot">.</span>
          </div>
          <h1 className="ig-title">Initials</h1>
          <p className="ig-subtitle">
            Race to name a famous person matching two random initials
          </p>

          <div className="ig-lobby-form">
            <input
              className="ig-input"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={20}
              onKeyDown={(e) => e.key === "Enter" && !showJoin && createRoom()}
            />

            {!showJoin ? (
              <>
                <div className="ig-rounds-row">
                  <label className="ig-label">Rounds</label>
                  <input
                    className="ig-input ig-rounds-input"
                    type="number"
                    min={1}
                    max={30}
                    value={maxRoundsInput}
                    onChange={(e) => setMaxRoundsInput(e.target.value)}
                  />
                </div>
                <button
                  className="ig-btn ig-btn-primary"
                  onClick={createRoom}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating…" : "Create Room"}
                </button>
                <button
                  className="ig-btn ig-btn-ghost"
                  onClick={() => setShowJoin(true)}
                >
                  Join Room
                </button>
              </>
            ) : (
              <>
                <input
                  className="ig-input ig-code-input"
                  placeholder="Room code"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  maxLength={5}
                  onKeyDown={(e) => e.key === "Enter" && joinRoom()}
                />
                <button
                  className="ig-btn ig-btn-primary"
                  onClick={joinRoom}
                  disabled={isLoading}
                >
                  {isLoading ? "Joining…" : "Join Game"}
                </button>
                <button
                  className="ig-btn ig-btn-ghost"
                  onClick={() => setShowJoin(false)}
                >
                  ← Back
                </button>
              </>
            )}

            {error && <div className="ig-error">{error}</div>}
          </div>
        </div>
      </div>
    );
  }

  const opponentName = isHost ? room.guest_username : room.host_username;

  // ── Waiting for opponent ────────────────────────────────────────────────────
  if (room.phase === "waiting") {
    return (
      <div className="ig-container">
        <div className="ig-waiting-card">
          <div className="ig-waiting-header">
            <span className="ig-you-badge">{room.host_username}</span>
            {room.guest_username && (
              <>
                <span className="ig-vs">vs</span>
                <span className="ig-opp-badge">{room.guest_username}</span>
              </>
            )}
          </div>

          {!room.guest_id ? (
            <div className="ig-waiting-content">
              <p className="ig-waiting-label">Share this code:</p>
              <div className="ig-code-display" onClick={copyCode}>
                <span className="ig-code-text">{room.code}</span>
                <span className="ig-copy-hint">{copied ? "Copied!" : "click to copy"}</span>
              </div>
              <div className="ig-pulse-dots">
                <span />
                <span />
                <span />
              </div>
              <p className="ig-waiting-sub">Waiting for opponent to join…</p>
            </div>
          ) : (
            <div className="ig-waiting-content">
              <p className="ig-ready-text">
                <strong>{room.guest_username}</strong> has joined!
              </p>
              {isHost ? (
                <div className="ig-host-start">
                  <div className="ig-rounds-row">
                    <label className="ig-label">Rounds</label>
                    <input
                      className="ig-input ig-rounds-input"
                      type="number"
                      min={1}
                      max={30}
                      value={maxRoundsInput}
                      onChange={(e) => setMaxRoundsInput(e.target.value)}
                      onBlur={() => {
                        const v = Math.max(1, Math.min(30, parseInt(maxRoundsInput) || 10));
                        setMaxRoundsInput(String(v));
                        updateRoom({ max_rounds: v });
                      }}
                    />
                  </div>
                  <button className="ig-btn ig-btn-primary" onClick={startGame}>
                    Start Game
                  </button>
                </div>
              ) : (
                <p className="ig-waiting-sub">Waiting for host to start…</p>
              )}
            </div>
          )}

          {isHost && room.guest_id && (
            <button className="ig-btn ig-btn-danger-ghost ig-reset-btn" onClick={resetGame}>
              ↺ Reset Room
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Scoreboard bar (shared across all game phases) ──────────────────────────
  const ScoreBar = () => (
    <div className="ig-score-bar">
      <div className={`ig-score-player ${isHost ? "ig-score-me" : ""}`}>
        <span className="ig-score-name">{room.host_username}</span>
        <span className="ig-score-num">{room.host_score}</span>
      </div>
      <div className="ig-score-round">
        Round {room.round_number + 1} / {room.max_rounds}
      </div>
      <div className={`ig-score-player ${!isHost ? "ig-score-me" : ""}`}>
        <span className="ig-score-num">{room.guest_score}</span>
        <span className="ig-score-name">{room.guest_username}</span>
      </div>
    </div>
  );

  // ── Letter pick ─────────────────────────────────────────────────────────────
  if (room.phase === "letter_pick") {
    const theirLetter = isHost ? room.guest_letter : room.host_letter;
    const myRole = isHost ? "first initial" : "second initial";

    return (
      <div className="ig-container">
        <ScoreBar />
        <div className="ig-phase-card">
          <h2 className="ig-phase-title">Pick your letter</h2>
          <p className="ig-phase-hint">
            Your letter will be the <strong>{myRole}</strong>
          </p>

          <div className="ig-initials-preview">
            <span className={`ig-initial-slot ${isHost && myLetter ? "ig-slot-set" : ""}`}>
              {isHost ? (myLetter ?? "?") : (room.host_letter ? "✓" : "?")}
            </span>
            <span className="ig-initial-dot">.</span>
            <span className={`ig-initial-slot ${!isHost && myLetter ? "ig-slot-set" : ""}`}>
              {!isHost ? (myLetter ?? "?") : (room.guest_letter ? "✓" : "?")}
            </span>
            <span className="ig-initial-dot">.</span>
          </div>

          {!myLetter ? (
            <div className="ig-alphabet-grid">
              {ALPHABET.map((letter) => (
                <button
                  key={letter}
                  className="ig-letter-btn"
                  onClick={() => pickLetter(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
          ) : (
            <div className="ig-picked-info">
              <div className="ig-picked-letter">{myLetter}</div>
              <p className="ig-waiting-sub">
                {theirLetter
                  ? "Both picked! Starting race…"
                  : `Waiting for ${opponentName} to pick…`}
              </p>
              {!theirLetter && (
                <div className="ig-pulse-dots">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Racing ──────────────────────────────────────────────────────────────────
  if (room.phase === "racing") {
    return (
      <div className="ig-container">
        <ScoreBar />
        <div className="ig-phase-card ig-race-card">
          <div className="ig-initials-display">{room.initials}</div>
          <p className="ig-race-hint">Name a famous person with these initials</p>

          {!room.proposed_name ? (
            <div className="ig-race-input-row">
              <input
                className="ig-input ig-race-input"
                placeholder="Type a name and press Enter…"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitName()}
                autoFocus
                disabled={mySkipRequest}
              />
              <button
                className="ig-btn ig-btn-primary"
                onClick={submitName}
                disabled={!nameInput.trim() || mySkipRequest}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="ig-submitted-indicator">
              <span className="ig-submitted-name">"{room.proposed_name}"</span>
              <p className="ig-waiting-sub">Waiting for votes…</p>
            </div>
          )}

          {!room.proposed_name && (
            <button
              className={`ig-btn ${mySkipRequest ? "ig-btn-skip-active" : "ig-btn-ghost"}`}
              onClick={requestSkip}
              disabled={mySkipRequest}
            >
              {mySkipRequest
                ? `Skipping… (waiting for ${opponentName})`
                : "⏭ Skip this round"}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Voting ──────────────────────────────────────────────────────────────────
  if (room.phase === "voting") {
    const proposerName =
      room.proposer === "host" ? room.host_username : room.guest_username;
    const iProposed =
      (room.proposer === "host" && isHost) ||
      (room.proposer === "guest" && !isHost);

    return (
      <div className="ig-container">
        <ScoreBar />
        <div className="ig-phase-card ig-vote-card">
          <p className="ig-vote-proposer">
            <span className="ig-vote-proposer-name">{proposerName}</span> says:
          </p>
          <div className="ig-vote-name">"{room.proposed_name}"</div>
          <p className="ig-vote-initials-check">
            <span className="ig-initials-small">{room.initials}</span>
          </p>

          {iProposed ? (
            <div className="ig-waiting-votes">
              <p>You proposed this — your vote is ✓ yes.</p>
              <p className="ig-waiting-sub">Waiting for {opponentName} to vote…</p>
              <div className="ig-pulse-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
          ) : myVote ? (
            <div className="ig-voted-indicator">
              <span>{myVote === "yes" ? "✓ You voted Yes" : "✗ You voted No"}</span>
              <p className="ig-waiting-sub">Waiting for {proposerName}…</p>
            </div>
          ) : (
            <div className="ig-vote-actions">
              <p className="ig-vote-question">Do you recognize this person?</p>
              <div className="ig-vote-buttons">
                <button className="ig-btn ig-btn-yes" onClick={() => castVote("yes")}>
                  ✓ Yes, I know them!
                </button>
                <button className="ig-btn ig-btn-no" onClick={() => castVote("no")}>
                  ✗ Don't recognize
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Round result ─────────────────────────────────────────────────────────────
  if (room.phase === "round_result") {
    const isPoint = room.last_round_result?.startsWith("✓");
    return (
      <div className="ig-container">
        <ScoreBar />
        <div className="ig-phase-card ig-result-card">
          <div className={`ig-result-icon ${isPoint ? "ig-result-win" : "ig-result-skip"}`}>
            {isPoint ? "🎉" : "⏭"}
          </div>
          <p className="ig-result-text">{room.last_round_result}</p>
          <div className="ig-result-scores">
            <div className="ig-result-score-item">
              <span className="ig-result-score-name">{room.host_username}</span>
              <span className="ig-result-score-num">{room.host_score}</span>
            </div>
            <div className="ig-result-score-item">
              <span className="ig-result-score-name">{room.guest_username}</span>
              <span className="ig-result-score-num">{room.guest_score}</span>
            </div>
          </div>
          {room.round_number + 1 < room.max_rounds ? (
            <p className="ig-waiting-sub ig-next-round-hint">
              Next round starting…
            </p>
          ) : (
            <p className="ig-waiting-sub ig-next-round-hint">
              Last round — calculating final scores…
            </p>
          )}
        </div>
      </div>
    );
  }

  // ── Game over ────────────────────────────────────────────────────────────────
  if (room.phase === "game_over") {
    const hostWon = room.host_score > room.guest_score;
    const tied = room.host_score === room.guest_score;
    const winnerName = tied
      ? null
      : hostWon
      ? room.host_username
      : room.guest_username;

    return (
      <div className="ig-container">
        <div className="ig-gameover-card">
          <div className="ig-gameover-trophy">{tied ? "🤝" : "🏆"}</div>
          <h2 className="ig-gameover-title">
            {tied ? "It's a tie!" : `${winnerName} wins!`}
          </h2>
          <div className="ig-gameover-scores">
            <div
              className={`ig-gameover-score-item ${!tied && hostWon ? "ig-gameover-winner" : ""}`}
            >
              <span className="ig-gameover-score-name">{room.host_username}</span>
              <span className="ig-gameover-score-num">{room.host_score}</span>
            </div>
            <div
              className={`ig-gameover-score-item ${!tied && !hostWon ? "ig-gameover-winner" : ""}`}
            >
              <span className="ig-gameover-score-name">{room.guest_username}</span>
              <span className="ig-gameover-score-num">{room.guest_score}</span>
            </div>
          </div>
          {isHost && (
            <button className="ig-btn ig-btn-primary" onClick={playAgain}>
              Play Again
            </button>
          )}
          {!isHost && (
            <p className="ig-waiting-sub">Waiting for host to start a new game…</p>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default InitialsGame;
