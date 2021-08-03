import { Jeton } from "../models/Player";
import PropTypes from "prop-types";

const style = (color) => ({
  color,
  background: "none",
  border: "2px solid black",
  fontSize: "30px",
  fontWeight: "800",
  fontFamily: "Dancing Script",
  cursor: "pointer",
  outline: "none"
});

const Square = ({ jeton: { sign, color }, onClick }) => (
  <button style={style(color)} onClick={onClick}>
    {sign}
  </button>
);

Square.propTypes = {
  jeton: PropTypes.instanceOf(Jeton),
  onClick: PropTypes.func
};

export default Square;
