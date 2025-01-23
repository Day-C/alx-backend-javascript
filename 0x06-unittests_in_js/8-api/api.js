// reate a simplr express server

const express =  require('express');

const app = express();
const.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
