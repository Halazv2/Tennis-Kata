# Tennis Kata in Javascript + Jest

This script allows you to run a Tennis Game test by providing the names of two players.

## Getting Started

### Prerequisites

Ensure that you have Node.js installed on your machine. If not, you can download it from [here](https://nodejs.org/en/download/).

## How to Use

1. Clone this repository to your local machine.

```bash
git clone https://github.com/Halazv2/Tennis-Kata.git
```

2. Navigate to the directory containing the `script.js` file in your terminal then Install dependencies by running the following command in your terminal:

```bash
cd Tennis-Kata
npm install
```

3. Run the script using Node.js by typing the following command:

```bash
node script.js
```
4. The script will prompt you to enter the names of two players. After entering each name, press Enter.

```bash
Enter player one name: Player1
Enter player two name: Player2
```
5. After entering the names, the script will automatically run the Tennis Game test with the provided player names.

## The Tennis Kata Rules

You can read more about Tennis scores [at wikipedia](http://en.wikipedia.org/wiki/Tennis#Scoring) which is summarized below:

A game is won by the first player to have won at least four points in total and at least two points more than the opponent.

1. Each player can have either of these points in one game “love” “15” “30” “40”
2. If you have 40 and you win the point you win the game, however there are special rules.
3. If both have 40 the players are “deuce”.
4. If the game is in deuce, the winner of a point will have advantage
5. If the player with advantage wins the ball he wins the game
6. If the player without advantage wins they are back at deuce.
