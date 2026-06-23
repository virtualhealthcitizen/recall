#!/usr/bin/env node
// Minimal zero-dependency static file server for the Recall app.
// Serves the single-file index.html (and the exports/ folder) over HTTP.
//
// Usage:
//   node serve.js            # serve on http://localhost:4173
//   PORT=8080 node serve.js  # serve on a different port
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 4173;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.join(ROOT, p);
  // Prevent path traversal outside the project root.
  if (!file.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("forbidden");
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("not found");
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Try: PORT=8080 node serve.js`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, () => {
  console.log(`Recall is serving at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop.");
});
