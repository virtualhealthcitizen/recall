# Recall

A simple, fast flashcards app for studying with spaced repetition. The entire
app is a single self-contained `index.html` (vanilla JS, no build step), so it
runs anywhere you can serve a static file.

![Recall demo](demo.gif)

## Features

- Organize cards into **decks** grouped by **subject**
- Two card types: **basic** (front/back) and **fill-in-the-blank**
- Spaced-repetition scheduling, with a "Study due" queue
- Inline images in cards (stored per-deck)
- Light and **dark** themes (dark by default) and a compact density mode
- **Automatic persistence** — your decks live in the browser's own storage
  (IndexedDB, with a localStorage fallback) and are restored every time you
  reopen the app; no manual saving needed
- **Export / Import** to JSON for backups or moving data between devices

## Project layout

```
index.html    # the entire app — markup, styles, and vanilla JS (no build step)
serve.js      # zero-dependency static server (Node stdlib only)
exports/      # sample JSON exports you can Import to try the app
.claude/      # editor launch config (runs serve.js)
```

## Requirements

- [Node.js](https://nodejs.org/) 14 or newer (no npm install required — the
  server uses only Node's built-in modules)

## Running the app

A small zero-dependency server script, [`serve.js`](serve.js), is included.

From the project root:

```bash
node serve.js
```

Then open <http://localhost:4173> in your browser.

To stop the server, press `Ctrl+C`.

### Using a different port

The port defaults to `4173`. Override it with the `PORT` environment variable:

```bash
PORT=8080 node serve.js
```

On macOS / Linux you can also run the script directly (it is marked
executable):

```bash
./serve.js
```

## Your data

Decks and cards are saved automatically in the browser you open the app in.
Because the data is tied to that browser's storage for `localhost`, clearing
site data or switching browsers starts you fresh. Use the **Export** button to
save a backup, and **Import** to restore one. Sample exports live in the
[`exports/`](exports/) folder.
