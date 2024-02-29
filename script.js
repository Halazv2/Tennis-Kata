const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { exec } = require("child_process");

readline.question("Enter player one name: ", (playerOne) => {
  readline.question("Enter player two name: ", (playerTwo) => {
    readline.close();

    console.log("Running tests...");

    // setting PLAYER_ONE and PLAYER_TWO are being set temporarily for the npm run test command.
    exec(`PLAYER_ONE=${playerOne} PLAYER_TWO=${playerTwo} npm run test src/TennisGame.test.js -- --colors `, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  });
});
