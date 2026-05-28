const http = require('http');
const fs = require('fs');
const path = require('path');

// Always 3000 — matches Railway domain routing target
const PORT = 3000;

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) { res.writeHead(500); res.end('Error loading page'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(PORT, '0.0.0.0', () => {
  console.log(`RobustVent CRM listening on 0.0.0.0:${PORT}`);
});
