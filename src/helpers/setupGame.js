const TennisGame = require("../TennisGame");

const playerOne = process.env.PLAYER_ONE;
const playerTwo = process.env.PLAYER_TWO;

function setupGame() {
  return new TennisGame(playerOne, playerTwo);
}

module.exports = { setupGame, playerOne, playerTwo };
