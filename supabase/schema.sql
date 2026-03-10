-- Initials Game: Two-player famous-person guessing game
-- Run this in your Supabase SQL editor to set up the game

create table if not exists initials_game_rooms (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  host_id text not null,
  host_username text not null,
  guest_id text,
  guest_username text,
  host_score integer default 0,
  guest_score integer default 0,
  phase text default 'waiting',
  host_letter text,
  guest_letter text,
  initials text,
  proposed_name text,
  proposer text,
  host_vote text,
  guest_vote text,
  host_wants_skip boolean default false,
  guest_wants_skip boolean default false,
  host_picks_first boolean default true,
  round_number integer default 0,
  max_rounds integer default 10,
  last_round_result text,
  racing_started_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Row Level Security
alter table initials_game_rooms enable row level security;

create policy "Public read" on initials_game_rooms for select using (true);
create policy "Public insert" on initials_game_rooms for insert with check (true);
create policy "Public update" on initials_game_rooms for update using (true);

-- Enable Realtime
alter publication supabase_realtime add table initials_game_rooms;

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger initials_game_rooms_updated_at
  before update on initials_game_rooms
  for each row execute function update_updated_at();
