// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  if (process.env.NODE_ENV === "production") {
    server.use((req, res, nextMiddleware) => {
      const reqIsSecure = req.get("X-Forwarded-Proto") === "https";
      if (!reqIsSecure) {
        res.redirect(`https://${req.hostname}${req.url}`);
      } else {
        nextMiddleware();
      }
    })
  }
  
  server.use((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
});

/* Force SSL connection */
