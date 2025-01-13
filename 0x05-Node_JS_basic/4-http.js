// creat a simple node server

const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const app = createServer();

// on request
app.on('request', (_, res) => {
  const responseTxt = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseTxt.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseTxt));
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;
