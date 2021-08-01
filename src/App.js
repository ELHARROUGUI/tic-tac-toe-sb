import { useState } from "react";
import "./styles.css";
import Grid from "./components/Grid";
import { Game } from "./models/Game";

export default function App() {
  const [game, setGame] = useState(new Game());

  const onReset = () => {
    setGame(new Game());
  };

  const handleSquareClick = (i) => {
    const { player1, player2, grid, winner, activePlayer } = game;
    if (winner || grid[i].sign) return;

    const gameClone = new Game(player1, player2, grid);
    gameClone.grid[i] = activePlayer.jeton;
    gameClone.switchActivePlayer();
    setGame(gameClone);
  };

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <p>multi-player, multi-type, multi-fun</p>
      <Grid grid={game.grid} onClick={handleSquareClick} />
      <div>
        <p>
          {game.winner
            ? "Winner: " + game.winner.name
            : "Next Player: " + game.activePlayer.name}
        </p>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
}
