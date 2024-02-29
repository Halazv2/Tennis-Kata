class TennisGame {
  constructor(playerOneName, playerTwoName) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  getScoreLabel(score) {
    switch (score) {
      case 3:
        return 40;
      case 2:
        return 30;
      case 1:
        return 15;
      case 0:
        return "Love";
      default:
        return points;
    }
  }

  // increment players score
  playerOneScores() {
    this.playerOneScore++;
  }

  playerTwoScores() {
    this.playerTwoScore++;
  }

  isDeuce() {
    // check if both players have 3 points or more and the points are equal
    return this.playerOneScore >= 3 && this.playerTwoScore === this.playerOneScore;
  }

  hasAdvantage() {
    // check if both players have 3 points or more and the points are not equal
    return (this.playerTwoScore >= 4 && this.playerTwoScore === this.playerOneScore + 1) || (this.playerOneScore >= 4 && this.playerOneScore === this.playerTwoScore + 1);
  }

  playerWithHighestScore() {
    // get the player with the highest score
    return this.playerOneScore > this.playerTwoScore ? this.playerOneName : this.playerTwoName;
  }

  hasWinner() {
    // check if a player has 4 points or more and ahead by 2 points
    return (this.playerTwoScore >= 4 && this.playerTwoScore >= this.playerOneScore + 2) || (this.playerOneScore >= 4 && this.playerOneScore >= this.playerTwoScore + 2);
  }

  // get the score of the game
  getScore() {
    const winner = this.playerWithHighestScore();

    if (this.hasWinner()) {
      return `${winner} wins`;
    }

    if (this.hasAdvantage()) {
      return `Advantage ${winner}`;
    }

    if (this.isDeuce()) {
      return "Deuce";
    }

    if (this.playerOneScore === this.playerTwoScore) {
      return `${this.getScoreLabel(this.playerOneScore)} all`;
    }

    return `${this.getScoreLabel(this.playerOneScore)}, ${this.getScoreLabel(this.playerTwoScore)}`;
  }
}

module.exports = TennisGame;
