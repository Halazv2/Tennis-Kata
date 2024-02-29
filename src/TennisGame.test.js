const TennisGame = require("./TennisGame");

let game;
const playerOne = process.env.PLAYER_ONE;
const playerTwo = process.env.PLAYER_TWO;

/* create a new instance of the `TennisGame` class before each test case is run. */
beforeEach(() => {
  game = new TennisGame(playerOne, playerTwo);
});

/**
 * The createScore function is used to simulate the score of a game.
 * @param {number} playerOneBalls - The number of balls player one has won.
 * @param {number} playerTwoBalls - The number of balls player two has won.
 */

function createScore(playerOneBalls, playerTwoBalls) {
  for (let i = 0; i < playerOneBalls; i++) {
    game.playerOneScores();
  }
  for (let i = 0; i < playerTwoBalls; i++) {
    game.playerTwoScores();
  }
}

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
    createScore(0, 2);
    const score = game.getScore();
    expect(score).toBe("Love, 30");
  });

  test(`${playerOne} first three balls`, () => {
    createScore(3, 0);
    const score = game.getScore();
    expect(score).toBe("40, Love");
  });
});

describe("Tennis Game:: DEUCE", () => {
  test("Players are Deuce", () => {
    createScore(3, 3); // 40 - 40
    const score = game.getScore();
    expect(score).toBe("Deuce");
  });

  test("Players are Deuce 4", () => {
    createScore(4, 4);
    const score = game.getScore();
    expect(score).toBe("Deuce");
  });
});

describe("Tennis Game:: win", () => {
  test(`${playerOne} wins game`, () => {
    createScore(4, 0);
    const score = game.getScore();
    expect(score).toBe(`${playerOne} wins`);
  });

  test(`${playerTwo} wins game`, () => {
    createScore(1, 4);
    const score = game.getScore();
    expect(score).toBe(`${playerTwo} wins`);
  });

  test(`${playerTwo} wins`, () => {
    createScore(2, 4);
    const score = game.getScore();
    expect(score).toBe(`${playerTwo} wins`);
  });
});

describe("advantage", () => {
  test(`${playerTwo} has advantage`, () => {
    createScore(4, 5);
    const score = game.getScore();
    expect(score).toBe(`Advantage ${playerTwo}`);
  });

  test(`${playerOne} has advantage`, () => {
    createScore(5, 4);
    const score = game.getScore();
    expect(score).toBe(`Advantage ${playerOne}`);
  });

  test(`${playerTwo} wins after advantage`, () => {
    createScore(6, 8);
    const score = game.getScore();
    expect(score).toBe(`${playerTwo} wins`);
  });

  test(`${playerOne} wins after advantage`, () => {
    createScore(8, 6);
    const score = game.getScore();
    expect(score).toBe(`${playerOne} wins`);
  });
});
