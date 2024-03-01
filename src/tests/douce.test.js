const createScore = require("../helpers/createScore");
const { setupGame } = require("../helpers/setupGame");

let game;

/* create a new instance of the `TennisGame` class before each test case is run. */
beforeEach(() => {
  game = setupGame();
});

describe("Tennis Game:: DEUCE", () => {
  test("Players are Deuce", () => {
    createScore(3, 3, game); // 40 - 40
    const score = game.getScore();
    expect(score).toBe("Deuce");
  });

  test("Players are Deuce 4", () => {
    createScore(4, 4, game);
    const score = game.getScore();
    expect(score).toBe("Deuce");
  });
});
