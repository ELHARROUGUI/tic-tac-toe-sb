import Square from "./Square";
import { Jeton } from "../models/Player";
import PropTypes from "prop-types";

const style = {
  border: "none",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
};

const Grid = ({ grid, onClick }) => {
  return (
    <div style={style}>
      {grid.map((jeton, i) => (
        <Square key={i} jeton={jeton} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.instanceOf(Jeton)),
  onClick: PropTypes.func
};

export default Grid;
