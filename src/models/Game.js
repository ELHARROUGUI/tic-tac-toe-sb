import { Player } from "./Player";

export class Game {
  constructor(player1, player2, grid) {
    if (player1 === undefined || player2 === undefined || grid === undefined) {
      console.log("constructor1");
      this.player1 = new Player("Player 1", 0, "X", true);
      this.player2 = new Player("Player 2", 0, "O", false);
      this.grid = Array(9).fill(null);
    } else {
      console.log("constructor1");
      this.player1 = player1;
      this.player2 = player2;
      this.grid = grid;
    }
  }

  get winner() {
    return this.getWinner();
  }

  get activePlayer() {
    return this.getActivePlayer();
  }

  getWinner() {
    const winnerCombinaisions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winnerCombinaisions.length; i++) {
      const [a, b, c] = winnerCombinaisions[i];
      if (
        this.grid[a] &&
        this.grid[a] === this.grid[b] &&
        this.grid[a] === this.grid[c]
      ) {
        return this.grid[a] === this.player1.jeton
          ? this.player1
          : this.player2;
      }
    }
    return null;
  }

  getActivePlayer() {
    return this.player2.isActive ? this.player2 : this.player1;
  }

  switchActivePlayer() {
    this.player1.isActive = !this.player1.isActive;
    this.player2.isActive = !this.player2.isActive;
  }
}
