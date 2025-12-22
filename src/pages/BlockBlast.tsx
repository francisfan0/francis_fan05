import { useState, useRef } from "react";
import "./BlockBlast.css";

interface Piece {
  grid: boolean[][];
}

interface Solution {
  pieceIndex: number;
  row: number;
  col: number;
}

const BlockBlast = () => {
  const [gameBoard, setGameBoard] = useState<boolean[][]>(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill(false))
  );

  const [pieces, setPieces] = useState<Piece[]>([
    {
      grid: Array(5)
        .fill(null)
        .map(() => Array(5).fill(false)),
    },
    {
      grid: Array(5)
        .fill(null)
        .map(() => Array(5).fill(false)),
    },
    {
      grid: Array(5)
        .fill(null)
        .map(() => Array(5).fill(false)),
    },
  ]);

  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isSolving, setIsSolving] = useState(false);

  // Drag selection state
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState<boolean | null>(null); // true = fill, false = clear
  const dragTarget = useRef<"board" | number | null>(null); // "board" or piece index

  // Visualization state for placed and cleared cells
  const [placedCells, setPlacedCells] = useState<Set<string>>(new Set());
  const [clearedCells, setClearedCells] = useState<Set<string>>(new Set());

  // Toast notification state
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  // Track which steps have been completed
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const handleGameBoardMouseDown = (row: number, col: number) => {
    setIsDragging(true);
    dragTarget.current = "board";
    const newValue = !gameBoard[row][col];
    setDragMode(newValue);
    const newBoard = gameBoard.map((r, i) =>
      i === row ? r.map((c, j) => (j === col ? newValue : c)) : [...r]
    );
    setGameBoard(newBoard);
  };

  const handleGameBoardMouseEnter = (row: number, col: number) => {
    if (isDragging && dragTarget.current === "board" && dragMode !== null) {
      const newBoard = gameBoard.map((r, i) =>
        i === row ? r.map((c, j) => (j === col ? dragMode : c)) : [...r]
      );
      setGameBoard(newBoard);
    }
  };

  const handlePieceMouseDown = (
    pieceIndex: number,
    row: number,
    col: number
  ) => {
    setIsDragging(true);
    dragTarget.current = pieceIndex;
    const newValue = !pieces[pieceIndex].grid[row][col];
    setDragMode(newValue);
    const newPieces = [...pieces];
    newPieces[pieceIndex].grid[row][col] = newValue;
    setPieces(newPieces);
  };

  const handlePieceMouseEnter = (
    pieceIndex: number,
    row: number,
    col: number
  ) => {
    if (isDragging && dragTarget.current === pieceIndex && dragMode !== null) {
      const newPieces = [...pieces];
      newPieces[pieceIndex].grid[row][col] = dragMode;
      setPieces(newPieces);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragMode(null);
    dragTarget.current = null;
  };

  const clearGameBoard = () => {
    setGameBoard(
      Array(8)
        .fill(null)
        .map(() => Array(8).fill(false))
    );
    setSolutions([]);
    setPlacedCells(new Set());
    setClearedCells(new Set());
    setCompletedSteps(new Set());
  };

  const clearPiece = (pieceIndex: number) => {
    const newPieces = [...pieces];
    newPieces[pieceIndex].grid = Array(5)
      .fill(null)
      .map(() => Array(5).fill(false));
    setPieces(newPieces);
  };

  const clearAllPieces = () => {
    setPieces([
      {
        grid: Array(5)
          .fill(null)
          .map(() => Array(5).fill(false)),
      },
      {
        grid: Array(5)
          .fill(null)
          .map(() => Array(5).fill(false)),
      },
      {
        grid: Array(5)
          .fill(null)
          .map(() => Array(5).fill(false)),
      },
    ]);
    setSolutions([]);
    setPlacedCells(new Set());
    setClearedCells(new Set());
    setCompletedSteps(new Set());
  };

  // Normalize a piece to its bounding box (remove empty rows/cols around it)
  const normalizePiece = (piece: boolean[][]): boolean[][] => {
    // Find bounding box
    let minRow = 5,
      maxRow = -1,
      minCol = 5,
      maxCol = -1;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (piece[i][j]) {
          minRow = Math.min(minRow, i);
          maxRow = Math.max(maxRow, i);
          minCol = Math.min(minCol, j);
          maxCol = Math.max(maxCol, j);
        }
      }
    }

    // If no cells are filled, return empty piece
    if (maxRow === -1) return [];

    // Extract just the bounding box
    const height = maxRow - minRow + 1;
    const width = maxCol - minCol + 1;
    const normalized: boolean[][] = [];

    for (let i = 0; i < height; i++) {
      const row: boolean[] = [];
      for (let j = 0; j < width; j++) {
        row.push(piece[minRow + i][minCol + j]);
      }
      normalized.push(row);
    }

    return normalized;
  };

  // Check if a piece can be placed at a specific position
  const canPlacePiece = (
    board: boolean[][],
    piece: boolean[][],
    row: number,
    col: number
  ): boolean => {
    const normalizedPiece = normalizePiece(piece);
    if (normalizedPiece.length === 0) return false;

    const height = normalizedPiece.length;
    const width = normalizedPiece[0].length;

    // Quick bounds check - if piece would extend past board, skip
    if (row + height > 8 || col + width > 8) return false;
    if (row < 0 || col < 0) return false;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (normalizedPiece[i][j]) {
          const newRow = row + i;
          const newCol = col + j;
          // Check if position is already occupied
          if (board[newRow][newCol]) {
            return false;
          }
        }
      }
    }
    return true;
  };

  // Place a piece on the board
  const placePiece = (
    board: boolean[][],
    piece: boolean[][],
    row: number,
    col: number
  ): boolean[][] => {
    const normalizedPiece = normalizePiece(piece);
    const newBoard = board.map((r) => [...r]);

    const height = normalizedPiece.length;
    const width = normalizedPiece[0]?.length || 0;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (normalizedPiece[i][j]) {
          newBoard[row + i][col + j] = true;
        }
      }
    }
    return newBoard;
  };

  // Count how many complete rows and columns would be cleared
  const countClearedLines = (board: boolean[][]): number => {
    let cleared = 0;

    // Check rows
    for (let i = 0; i < 8; i++) {
      if (board[i].every((cell) => cell)) {
        cleared++;
      }
    }

    // Check columns
    for (let j = 0; j < 8; j++) {
      if (board.every((row) => row[j])) {
        cleared++;
      }
    }

    return cleared;
  };

  // Apply line clearing to a board
  // Important: Check which rows/cols are complete BEFORE clearing any of them
  const applyLineClear = (board: boolean[][]): boolean[][] => {
    const newBoard = board.map((r) => [...r]);

    // First, identify all complete rows and columns on the ORIGINAL board
    const completeRows: number[] = [];
    const completeCols: number[] = [];

    // Check rows
    for (let i = 0; i < 8; i++) {
      if (board[i].every((cell) => cell)) {
        completeRows.push(i);
      }
    }

    // Check columns
    for (let j = 0; j < 8; j++) {
      if (board.every((row) => row[j])) {
        completeCols.push(j);
      }
    }

    // Now clear all identified rows
    for (const row of completeRows) {
      newBoard[row] = Array(8).fill(false);
    }

    // Now clear all identified columns
    for (const col of completeCols) {
      for (let i = 0; i < 8; i++) {
        newBoard[i][col] = false;
      }
    }

    return newBoard;
  };

  // Generate all permutations of an array
  const getPermutations = <T,>(arr: T[]): T[][] => {
    if (arr.length <= 1) return [arr];
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const perms = getPermutations(rest);
      for (const perm of perms) {
        result.push([arr[i], ...perm]);
      }
    }
    return result;
  };

  // Solve the puzzle
  const solve = () => {
    setIsSolving(true);
    setSolutions([]);

    // Get all non-empty pieces (deep copy to avoid state issues)
    const validPieces = pieces
      .map((p, idx) => ({
        grid: p.grid.map((row) => [...row]), // Deep copy the grid
        index: idx,
      }))
      .filter((p) => p.grid.some((row) => row.some((cell) => cell)));

    // Also deep copy the game board
    const boardCopy = gameBoard.map((row) => [...row]);

    if (validPieces.length === 0) {
      setIsSolving(false);
      setToast({ message: "Please design at least one piece!", type: "error" });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    // Debug: count cells in each piece
    const pieceSizes = validPieces.map((p) => {
      const normalized = normalizePiece(p.grid);
      const cells = normalized.reduce(
        (sum, row) => sum + row.filter((c) => c).length,
        0
      );
      return {
        index: p.index + 1,
        cells,
        height: normalized.length,
        width: normalized[0]?.length || 0,
      };
    });

    // Count empty cells on board
    const emptyCells = gameBoard.reduce(
      (sum, row) => sum + row.filter((c) => !c).length,
      0
    );
    const totalPieceCells = pieceSizes.reduce((sum, p) => sum + p.cells, 0);

    const allSolutions: {
      solution: Solution[];
      totalLinesCleared: number;
      finalBoard: boolean[][];
    }[] = [];

    // Try to place pieces in a specific order
    // Lines are cleared after EACH piece placement
    const tryPlacement = (
      currentBoard: boolean[][],
      remainingPieces: { grid: boolean[][]; index: number }[],
      currentSolution: Solution[],
      totalLinesCleared: number
    ): void => {
      // If we've placed all pieces, save this solution!
      if (remainingPieces.length === 0) {
        allSolutions.push({
          solution: [...currentSolution],
          totalLinesCleared: totalLinesCleared,
          finalBoard: currentBoard.map((r) => [...r]),
        });
        return;
      }

      const piece = remainingPieces[0];
      const restPieces = remainingPieces.slice(1);

      // Try placing the piece at every position
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          if (canPlacePiece(currentBoard, piece.grid, row, col)) {
            // Place the piece
            const boardAfterPlacement = placePiece(
              currentBoard,
              piece.grid,
              row,
              col
            );

            // Count lines that will be cleared
            const linesCleared = countClearedLines(boardAfterPlacement);

            // Clear the lines immediately (this is key!)
            const clearedBoard = applyLineClear(boardAfterPlacement);

            const newSolution = [
              ...currentSolution,
              { pieceIndex: piece.index, row, col },
            ];

            // Recursively try to place remaining pieces on the CLEARED board
            tryPlacement(
              clearedBoard,
              restPieces,
              newSolution,
              totalLinesCleared + linesCleared
            );
          }
        }
      }
    };

    // Try ALL permutations of piece order (since order matters with line clearing!)
    const piecePermutations = getPermutations(validPieces);

    for (const permutation of piecePermutations) {
      tryPlacement(boardCopy, permutation, [], 0);
    }

    setIsSolving(false);

    if (allSolutions.length > 0) {
      // Find the solution with the highest score (most total lines cleared)
      allSolutions.sort((a, b) => b.totalLinesCleared - a.totalLinesCleared);
      const bestSolution = allSolutions[0];

      setSolutions(bestSolution.solution);
      setCompletedSteps(new Set()); // Reset completed steps when new solution is found

      if (bestSolution.totalLinesCleared > 0) {
        setToast({
          message: `Best solution found! Clears ${bestSolution.totalLinesCleared} line(s) total. Found ${allSolutions.length} total solution(s).`,
          type: "success",
        });
      } else {
        setToast({
          message: `Solution found! All pieces can be placed, but no lines will be cleared. Found ${allSolutions.length} total solution(s).`,
          type: "info",
        });
      }
      setTimeout(() => setToast(null), 4000);
    } else {
      // Debug info when no solution found
      const pieceInfo = pieceSizes
        .map(
          (p) => `Piece ${p.index}: ${p.cells} cells (${p.height}x${p.width})`
        )
        .join(", ");
      setToast({
        message: `No solution found! Board has ${emptyCells} empty cells. Pieces need ${totalPieceCells} cells total. (${pieceInfo}). Tried ${piecePermutations.length} orderings.`,
        type: "error",
      });
      setTimeout(() => setToast(null), 5000);
    }
  };

  // Apply a solution step (with automatic line clearing and visualization)
  const applySolution = (solutionIndex: number) => {
    if (solutionIndex >= solutions.length) return;

    // Check if this step is already completed
    if (completedSteps.has(solutionIndex)) {
      setToast({
        message: `Step ${solutionIndex + 1} has already been applied!`,
        type: "info",
      });
      setTimeout(() => setToast(null), 2000);
      return;
    }

    // Check if previous steps are completed (must apply in order)
    if (solutionIndex > 0 && !completedSteps.has(solutionIndex - 1)) {
      setToast({
        message: `Please apply Step ${solutionIndex} first!`,
        type: "error",
      });
      setTimeout(() => setToast(null), 2000);
      return;
    }

    const solution = solutions[solutionIndex];
    const piece = pieces[solution.pieceIndex].grid;
    const normalized = normalizePiece(piece);

    // Place the piece on the board
    let newBoard = placePiece(gameBoard, piece, solution.row, solution.col);

    // Mark all newly placed cells
    const newPlacedCells = new Set<string>();
    const height = normalized.length;
    const width = normalized[0]?.length || 0;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (normalized[i][j]) {
          newPlacedCells.add(`${solution.row + i},${solution.col + j}`);
        }
      }
    }

    // Identify which cells will be cleared
    const cellsToClear = new Set<string>();

    // Check rows
    for (let i = 0; i < 8; i++) {
      if (newBoard[i].every((cell) => cell)) {
        for (let j = 0; j < 8; j++) {
          cellsToClear.add(`${i},${j}`);
        }
      }
    }

    // Check columns
    for (let j = 0; j < 8; j++) {
      if (newBoard.every((row) => row[j])) {
        for (let i = 0; i < 8; i++) {
          cellsToClear.add(`${i},${j}`);
        }
      }
    }

    // Show both placed cells (orange) and cleared cells (blue outline)
    // This way you can see the full piece AND which rows/columns are being cleared
    setPlacedCells(newPlacedCells);
    setClearedCells(cellsToClear);

    // Apply the clearing to the actual board
    newBoard = applyLineClear(newBoard);
    setGameBoard(newBoard);

    // Mark this step as completed
    setCompletedSteps((prev) => new Set([...prev, solutionIndex]));
  };

  return (
    <div
      className="blockblast-container"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Toast Notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>{toast.message}</div>
      )}

      <h1 className="blockblast-title">Block Blast Solver</h1>

      {/* Top Section: Game Board and Solutions */}
      <div className="blockblast-top-section">
        {/* Game Board */}
        <div className="board-section">
          <div className="section-header">
            <h2>Game Board (8x8)</h2>
            <button className="btn-clear" onClick={clearGameBoard}>
              Clear Board
            </button>
          </div>
          <div className="game-board" style={{ userSelect: "none" }}>
            {gameBoard.map((row, i) => (
              <div key={i} className="board-row">
                {row.map((cell, j) => {
                  const cellKey = `${i},${j}`;
                  const isPlaced = placedCells.has(cellKey);
                  const isCleared = clearedCells.has(cellKey);

                  return (
                    <div
                      key={`${i}-${j}`}
                      className={`board-cell ${cell ? "filled" : ""} ${
                        isPlaced ? "placed" : ""
                      } ${isCleared ? "cleared" : ""}`}
                      onMouseDown={() => handleGameBoardMouseDown(i, j)}
                      onMouseEnter={() => handleGameBoardMouseEnter(i, j)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        {solutions.length > 0 ? (
          <div className="solutions-section">
            <div className="solutions-header">
              <h2>Solution Steps</h2>
            </div>
            <div className="solution-steps">
              {solutions.map((solution, idx) => {
                const isCompleted = completedSteps.has(idx);
                const isLocked = idx > 0 && !completedSteps.has(idx - 1);
                const isAvailable = !isCompleted && !isLocked;

                return (
                  <div
                    key={idx}
                    className={`solution-step ${
                      isCompleted ? "completed" : ""
                    } ${isLocked ? "locked" : ""}`}
                  >
                    <div className="solution-step-info">
                      <span
                        className={`step-number ${
                          isCompleted ? "completed" : ""
                        }`}
                      >
                        {isCompleted ? "✓" : idx + 1}
                      </span>
                      <span className="step-text">
                        Piece {solution.pieceIndex + 1} at ({solution.row + 1},{" "}
                        {solution.col + 1})
                      </span>
                    </div>
                    {!isLocked && (
                      <button
                        className="btn-apply"
                        onClick={() => applySolution(idx)}
                        disabled={!isAvailable}
                      >
                        {isCompleted ? "Done" : "Apply"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            {completedSteps.size === solutions.length &&
              solutions.length > 0 && (
                <div className="all-steps-complete-message">
                  <p>
                    ✓ All steps complete! You can enter new blocks and solve
                    again from this position.
                  </p>
                </div>
              )}
          </div>
        ) : (
          <div className="solutions-placeholder">
            <p>Click "Solve Puzzle" to find the best solution</p>
          </div>
        )}
      </div>

      {/* Bottom Section: Pieces */}
      <div className="pieces-section">
        <div className="section-header">
          <h2>Available Pieces</h2>
          <button className="btn-clear" onClick={clearAllPieces}>
            Clear All Pieces
          </button>
        </div>
        <div className="pieces-container">
          {pieces.map((piece, pieceIdx) => (
            <div key={pieceIdx} className="piece-wrapper">
              <div className="piece-header">
                <h3>Piece {pieceIdx + 1}</h3>
                <button
                  className="btn-clear-small"
                  onClick={() => clearPiece(pieceIdx)}
                >
                  Clear
                </button>
              </div>
              <div className="piece-grid" style={{ userSelect: "none" }}>
                {piece.grid.map((row, i) => (
                  <div key={i} className="piece-row">
                    {row.map((cell, j) => (
                      <div
                        key={`${i}-${j}`}
                        className={`piece-cell ${cell ? "filled" : ""}`}
                        onMouseDown={() => handlePieceMouseDown(pieceIdx, i, j)}
                        onMouseEnter={() =>
                          handlePieceMouseEnter(pieceIdx, i, j)
                        }
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solve Button */}
      <div className="solve-section">
        <button className="btn-solve" onClick={solve} disabled={isSolving}>
          {isSolving ? "Solving..." : "Solve Puzzle"}
        </button>
      </div>
    </div>
  );
};

export default BlockBlast;
