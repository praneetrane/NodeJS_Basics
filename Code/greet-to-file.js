const fs = require("fs");
const readline = require("readline");
//----To write Hello World! to a file.

// const data = new Uint8Array(Buffer.from("Hello World!"));

const writeGreetingToFile = (name) => {
  fs.writeFile("message.txt", `Good Morning! ${name}`, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

//---- Take user input and write to the file.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.close();
  writeGreetingToFile(name);
});
