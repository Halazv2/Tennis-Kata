const createScore = require("../helpers/createScore");
const { setupGame, playerTwo, playerOne } = require("../helpers/setupGame");

let game;

/* create a new instance of the `TennisGame` class before each test case is run. */
beforeEach(() => {
  game = setupGame();
});

describe("advantage", () => {
  test(`${playerTwo} has advantage`, () => {
    createScore(4, 5, game);
    const score = game.getScore();
    expect(score).toBe(`Advantage ${playerTwo}`);
  });

  test(`${playerOne} has advantage`, () => {
    createScore(5, 4, game);
    const score = game.getScore();
    expect(score).toBe(`Advantage ${playerOne}`);
  });

  test(`${playerTwo} wins after advantage`, () => {
    createScore(6, 8, game);
    const score = game.getScore();
    expect(score).toBe(`${playerTwo} wins`);
  });

  test(`${playerOne} wins after advantage`, () => {
    createScore(8, 6, game);
    const score = game.getScore();
    expect(score).toBe(`${playerOne} wins`);
  });
});
