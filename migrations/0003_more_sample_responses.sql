-- A second batch of 24 sample responses, using the same counts and dates as
-- the seed in 0001_init.sql, with each project direction mapped to the team
-- that replaced it. Keep SAMPLE_BASELINE_COUNT in src/lib/db.ts in sync.

INSERT INTO responses (choice_id, created_at) VALUES
  ('gotham-fc', '2026-08-01 09:12:00'),
  ('gotham-fc', '2026-08-03 14:45:00'),
  ('gotham-fc', '2026-08-05 11:20:00'),
  ('gotham-fc', '2026-08-09 16:03:00'),
  ('gotham-fc', '2026-08-12 08:37:00'),
  ('gotham-fc', '2026-08-15 19:52:00'),
  ('gotham-fc', '2026-08-19 13:10:00'),
  ('gotham-fc', '2026-08-24 10:44:00'),
  ('san-diego-wave-fc', '2026-08-02 10:05:00'),
  ('san-diego-wave-fc', '2026-08-06 15:22:00'),
  ('san-diego-wave-fc', '2026-08-10 09:47:00'),
  ('san-diego-wave-fc', '2026-08-14 17:36:00'),
  ('san-diego-wave-fc', '2026-08-18 12:15:00'),
  ('san-diego-wave-fc', '2026-08-22 20:08:00'),
  ('washington-spirit', '2026-08-04 08:55:00'),
  ('washington-spirit', '2026-08-11 14:30:00'),
  ('washington-spirit', '2026-08-17 11:18:00'),
  ('washington-spirit', '2026-08-25 09:41:00'),
  ('angel-city-fc', '2026-08-03 07:29:00'),
  ('angel-city-fc', '2026-08-07 13:52:00'),
  ('angel-city-fc', '2026-08-13 18:04:00'),
  ('angel-city-fc', '2026-08-16 10:37:00'),
  ('angel-city-fc', '2026-08-21 15:49:00'),
  ('angel-city-fc', '2026-08-26 12:02:00');
