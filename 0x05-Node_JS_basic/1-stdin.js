// run on command line
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close(() => {
    console.log('This important software is now closing');
  });
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
