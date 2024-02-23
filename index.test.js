// =================================================== Functions ===================================================
// get the score label based on points
const getScoreLabel = (points) => {
  switch (points) {
    case 0:
      return "0";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    default:
      return points;
  }
};

const isDeuce = (player1Points, player2Points) => {
  // if both players have 3 points or more and the points are equal
  return player1Points >= 3 && player2Points >= 3 && player1Points === player2Points;
};

const hasAdvantage = (player1Points, player2Points) => {
  // if both players have 3 points or more and the points are not equal
  return player1Points >= 3 && player2Points >= 3 && Math.abs(player1Points - player2Points) === 1;
};

// get the current score
const getScore = (player1Points, player2Points) => {
  if (player1Points >= 4 && player1Points - player2Points >= 2) {
    return "Player 1 wins!";
  } else if (player2Points >= 4 && player2Points - player1Points >= 2) {
    return "Player 2 wins!";
  } else if (hasAdvantage(player1Points, player2Points)) {
    return player1Points > player2Points ? "Advantage Player 1" : "Advantage Player 2";
  } else if (isDeuce(player1Points, player2Points)) {
    return "Deuce";
  } else {
    return `${getScoreLabel(player1Points)}-${getScoreLabel(player2Points)}`;
  }
};

// handle player 1 winning a point

const player1WinsPoint = (player1Points, player2Points) => {
  if (isDeuce(player1Points, player2Points)) {
    return [player1Points + 1, player2Points];
  } else if (hasAdvantage(player1Points, player2Points)) {
    return [player1Points, player2Points];
  } else {
    return [player1Points + 1, player2Points];
  }
};

// handle player 2 winning a point
const player2WinsPoint = (player1Points, player2Points) => {
  if (isDeuce(player1Points, player2Points)) {
    return [player1Points, player2Points + 1];
  } else if (hasAdvantage(player1Points, player2Points)) {
    return [player1Points, player2Points];
  } else {
    return [player1Points, player2Points + 1];
  }
};

// =================================================== Jest Tests ===================================================
describe("Tennis Game", () => {
  // BEGINS:: INITIAL SCORE
  test("Initial score should be love-love", () => {
    expect(getScore(0, 0)).toBe("0-0");
  });

  // BEGINS:: FIRST POINT
  test("Player 1 wins first point", () => {
    expect(getScore(...player1WinsPoint(0, 0))).toBe("15-0");
  });

  test("Player 2 wins first point", () => {
    expect(getScore(...player2WinsPoint(0, 0))).toBe("0-15");
  });

  // BEGINS:: PLAYER WINS 4 POINTS AND AHEAD BY 2
  test("Player 1 wins a game", () => {
    let player1Points = 0;
    let player2Points = 0;
    while (player1Points < 4 || player1Points - player2Points < 2) {
      [player1Points, player2Points] = player1WinsPoint(player1Points, player2Points);
    }
    expect(getScore(player1Points, player2Points)).toBe("Player 1 wins!");
  });

  test("Player 2 wins a game", () => {
    let player1Points = 0;
    let player2Points = 0;
    while (player2Points < 4 || player2Points - player1Points < 2) {
      [player1Points, player2Points] = player2WinsPoint(player1Points, player2Points);
    }
    expect(getScore(player1Points, player2Points)).toBe("Player 2 wins!");
  });

  // BEGINS:: DEUCE AND ADVANTAGE
  test("Deuce", () => {
    let player1Points = 0;
    let player2Points = 0;
    while (!isDeuce(player1Points, player2Points)) {
      [player1Points, player2Points] = player1WinsPoint(player1Points, player2Points);
      [player1Points, player2Points] = player2WinsPoint(player1Points, player2Points);
    }
    expect(getScore(player1Points, player2Points)).toBe("Deuce");
  });

  test("Player 1 has advantage", () => {
    let player1Points = 0;
    let player2Points = 0;
    while (!hasAdvantage(player1Points, player2Points)) {
      [player1Points, player2Points] = player1WinsPoint(player1Points, player2Points);
      [player1Points, player2Points] = player2WinsPoint(player1Points, player2Points);
    }
    expect(getScore(player1Points, player2Points)).toBe("Advantage Player 1");
  });

  test("Player 2 has advantage", () => {
    let player1Points = 0;
    let player2Points = 0;
    while (!hasAdvantage(player1Points, player2Points)) {
      [player1Points, player2Points] = player1WinsPoint(player1Points, player2Points);
      [player1Points, player2Points] = player2WinsPoint(player1Points, player2Points);
    }
    expect(getScore(player2Points, player1Points)).toBe("Advantage Player 2");
  });
});
