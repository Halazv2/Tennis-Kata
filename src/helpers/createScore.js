/**
 * The createScore function is used to simulate the score of a game.
 * @param {number} playerOneBalls - The number of balls player one has won.
 * @param {number} playerTwoBalls - The number of balls player two has won.
 */

function createScore(playerOneBalls, playerTwoBalls, game) {
  for (let i = 0; i < playerOneBalls; i++) {
    game.playerOneScores();
  }
  for (let i = 0; i < playerTwoBalls; i++) {
    game.playerTwoScores();
  }
}

module.exports = createScore;
