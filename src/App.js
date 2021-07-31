import { useState } from "react";
import "./styles.css";
import Grid from "./components/Grid";
import { calculateWinner } from "./utils/helpers";

export default function App() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = useState(true);
  const winner = calculateWinner(grid);
  const onReset = () => {
    setGrid(Array(9).fill(null));
    setPlayerX(true);
  };

  const handleClick = (i) => {
    const gridCopy = [...grid];
    // If user click an occupied square or if game is won, return
    if (winner || gridCopy[i]) return;
    // Put an X or an O in the clicked square
    gridCopy[i] = playerX ? "X" : "O";
    setGrid(gridCopy);
    setPlayerX(!playerX);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Grid squares={grid} onClick={handleClick} />
      <div>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (playerX ? "X" : "O")}
        </p>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
}
