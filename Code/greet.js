const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  // TODO: Log the answer in a database
  console.log(`Hello I am ${name}`);

  rl.close();
});

