-- Switch the responses table from the four project directions to the four
-- NWSL teams in src/config/soccer-choices.ts. SQLite can't change a CHECK
-- constraint in place, so the table is rebuilt and existing rows are carried
-- over, mapping each project direction to the team that replaced it.

CREATE TABLE responses_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  choice_id TEXT NOT NULL CHECK (
    choice_id IN ('gotham-fc', 'san-diego-wave-fc', 'washington-spirit', 'angel-city-fc')
  ),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO responses_new (id, choice_id, created_at)
SELECT
  id,
  CASE choice_id
    WHEN 'interactive-tool' THEN 'gotham-fc'
    WHEN 'live-data' THEN 'san-diego-wave-fc'
    WHEN 'signed-in-portal' THEN 'washington-spirit'
    WHEN 'standalone-app' THEN 'angel-city-fc'
  END,
  created_at
FROM responses;

DROP TABLE responses;
ALTER TABLE responses_new RENAME TO responses;

CREATE INDEX IF NOT EXISTS idx_responses_choice_id ON responses (choice_id);
