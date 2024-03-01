const createScore = require("../helpers/createScore");
const { setupGame, playerTwo, playerOne } = require("../helpers/setupGame");

let game;

/* create a new instance of the `TennisGame` class before each test case is run. */
beforeEach(() => {
  game = setupGame();
});

describe("Tennis Game:: win", () => {
  test(`${playerOne} wins game`, () => {
    createScore(4, 0, game);
    const score = game.getScore();
    expect(score).toBe(`${playerOne} wins`);
  });

  test(`${playerTwo} wins game`, () => {
    createScore(1, 4, game);
    const score = game.getScore();
    expect(score).toBe(`${playerTwo} wins`);
  });

  test(`${playerTwo} wins`, () => {
    createScore(2, 4, game);
    const score = game.getScore();
    expect(score).toBe(`${playerTwo} wins`);
  });
});
