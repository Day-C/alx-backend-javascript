// creat a simple node server

const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const app = createServer();


//
app.on('request', (_, res) => {
  const responseTxt = 'Hello ALX!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseTxt.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseTxt));
});

app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});

module.exports = app;
