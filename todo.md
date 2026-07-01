# Recall — Burndown Backlog

Repo-specific work items for the Recall flashcards app (single-file `index.html`,
zero-dependency `serve.js`). Ordered by priority. Keep items small and shippable.

## High

- [ ] Add keyboard shortcuts for the study loop (space = flip, 1–4 = grade) and
  document them in the README.
- [ ] Guard against IndexedDB/localStorage being unavailable (private mode):
  surface a clear in-app warning instead of silently losing decks.
- [ ] Validate imported JSON against the export schema before merging, with a
  friendly error on malformed/foreign files.
- [ ] Add a lightweight in-app smoke test hook (e.g. `?selftest`) so CI can drive
  a headless assertion beyond the current server smoke test.

## Medium

- [ ] Show a per-deck "due today" count and an all-decks study-due summary on the
  home screen.
- [ ] Make the spaced-repetition intervals configurable per deck (currently
  fixed) and persist the setting.
- [ ] Compress/limit inline card images on paste to keep IndexedDB size bounded.
- [ ] Add an "Export selected decks" option instead of all-or-nothing export.

## Later

- [ ] Optional service worker for true offline use as an installable PWA.
- [ ] Deck sharing via a copy-paste share code (no backend).
- [ ] Statistics view: retention curve and reviews-over-time chart.
- [ ] Theme options beyond light/dark (accent color picker).

## Burndown Log

- 2026-06-30 — Added CI workflow (`ci.yml`), README CI badge, and this burndown
  backlog; cut release v0.1.1.
