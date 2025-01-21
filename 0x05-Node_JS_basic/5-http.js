// create a server wth routs

const http = require('http');

const args = process.argv.slice(2);
const students = require('./3-read_file_async');

const db = args[0];

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200; res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of out students\n');
    try {
      await students(db)
        .then((results) => {
          let i = 0;
          Object.keys(results).forEach((values) => {
            i += 1;
            if (i <= 2) {
              res.write(`${results[values]}\n`);
            } else {
              res.write(`${results[values]}`);
            }
          });
        });
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}_/`);
});

module.exports = app;
