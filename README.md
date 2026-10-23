# Who will win the NWSL playoffs?

A Webflow Cloud app for a Webflow University activity, adapted to NWSL
soccer. Participants pick the team they think will win the playoffs, submit
their vote, and get a reveal of that team: its logo, home city, a short
team fact, its best players, and a link to the team's official website. Shared
results, including a total vote count, persist after a refresh.

The four teams are Gotham FC, San Diego Wave FC, Washington Spirit, and
Angel City FC.

This repository is the **working learner starting point** for the results
visualization activity.

## Stack

- [Astro](https://astro.build) (server output) + `@astrojs/cloudflare` adapter
- Webflow Cloud SQLite (Cloudflare D1) via a `wrangler.json` binding
- No client framework, no auth, no external APIs

## Project structure

- `src/config/soccer-choices.ts` — the four NWSL teams participants pick from
- `src/config/choices.ts` — the original four project directions (no longer used)
- `src/config/activity-theme.ts` — the only two settings meant to be edited directly (accent color, reveal effect)
- `public/artifacts/` — the team logos (`gotham-fc.png`, `san-diego-wave-fc.png`, `washington-spirit.png`, `angel-city-fc.png`)
- `src/lib/db.ts` — query logic (aggregate totals, insert a response, tie-aware leader detection)
- `src/pages/api/results.ts` / `submit.ts` — the two server endpoints
- `src/pages/index.astro` — the whole UI, including the results-rendering flow
- `migrations/0001_init.sql` — schema + 24 seeded sample responses
- `migrations/0002_soccer_teams.sql` — switches the responses table to the four team IDs, carrying existing votes over
- `migrations/0003_more_sample_responses.sql` — 24 more sample responses for the teams (48 in total)
- `learner-resources/results-styles.css` — copy-ready styles for the results visualization activity
- `learner-resources/agent-prompts.md` — copy-ready coding-agent prompt for the activity

## Team colors

Each team's `accentColor` in `src/config/soccer-choices.ts` colors its picker
card border, the glow behind its logo, its results bar, and the buttons. The
**Reveal my team** button starts white with black text and switches to the
selected team's color; **Choose a different team** uses the picked team's
color. All four team colors are light, so both buttons use dark text on them,
which keeps text contrast at 5.6:1 or higher (the guideline is 4.5:1). If you
change a team color, check that it still has enough contrast with dark text.

## Local development

```bash
npm install
npm run dev
```

That's it. `npm run dev` automatically applies any pending local database
migration first (via a `predev` script), so the schema and the 48 sample
responses are ready the first time you run it — and running it again later
is safe; it won't reapply migrations or duplicate seed data.

Then open the local dev URL (http://localhost:4321) and try a submission —
the counts, total votes, and leader label should update, and refreshing the
page should keep your choice.

(Optional: `npm run cf-typegen` generates Cloudflare environment types for
editor/type-checking convenience. It isn't required to run or build the app.)

## Deploying

This app is meant to be deployed through the Webflow Cloud dashboard as a
**standalone app** (no existing Webflow site required): import this repository,
choose the branch, name the app, and deploy. Webflow Cloud provisions the D1
database automatically from the `wrangler.json` binding and runs the
migrations (including the sample data) on deploy. Each migration only runs
once, so new ones, such as the team switch in `0002_soccer_teams.sql`, also
apply to an already-deployed database.
