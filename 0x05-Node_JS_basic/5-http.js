// create a server wth routs

const http = requre('http');

const routes = {
  '/': (req, res) => {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.end('');
  },
  '/students': (res, res) => {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.end('');
  }
};

const app = http.createServer((req, res) => {
  const url = req.url;
  const handler = routes[url];
  if (handler) {
    handler(req, res);
  } else {
    res.writeHeader(404, {'Content-Type': 'text/plain'});
    res.end('not found!');
  }
});

app.listen(1245, ()=> {
  console.log('Server runnung on port 1245')'
});


module.exports = app
