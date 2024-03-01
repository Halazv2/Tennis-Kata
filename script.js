const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { exec } = require("child_process");

const tests = ["src/tests/initialScore.test.js", "src/tests/advantage.test.js", "src/tests/douce.test.js", "src/tests/win.test.js"];

readline.question("Enter player one name: ", (playerOne) => {
  readline.question("Enter player two name: ", (playerTwo) => {
    readline.close();

    console.log("Running tests...");

    /** setting PLAYER_ONE and PLAYER_TWO are being set temporarily for the npm run test command.
     * @verbose flag is used to display the full test name in the console.
     * @colors flag is used to display the test results in color.
     */

    exec(`PLAYER_ONE=${playerOne} PLAYER_TWO=${playerTwo} npm run test ${tests.join(" ")} -- --colors --verbose`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`${stdout}`);
      console.error(`${stderr}`);
    });
  });
});
