// creat a simple node server

const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});
module.exports = app;
