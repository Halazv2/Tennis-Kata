const createScore = require("../helpers/createScore");
const { setupGame, playerTwo, playerOne } = require("../helpers/setupGame");

let game;

/* create a new instance of the `TennisGame` class before each test case is run. */
beforeEach(() => {
  game = setupGame();
});

describe("Tennis Game:: INITIAL SCORE", () => {
  // BEGINS:: initial score
  test("New game should return Love-Love (Love all)", () => {
    const score = game.getScore();
    expect(score).toBe("Love all");
  });

  test(`${playerOne} wins first ball`, () => {
    game.playerOneScores();
    const score = game.getScore();
    expect(score).toBe("15, Love");
  });

  test("Fifteen all", () => {
    game.playerOneScores();
    game.playerTwoScores();
    const score = game.getScore();
    expect(score).toBe("15 all");
  });

  test(`${playerTwo} wins first two balls`, () => {
    createScore(0, 2, game);
    const score = game.getScore();
    expect(score).toBe("Love, 30");
  });

  test(`${playerOne} first three balls`, () => {
    createScore(3, 0, game);
    const score = game.getScore();
    expect(score).toBe("40, Love");
  });
});
