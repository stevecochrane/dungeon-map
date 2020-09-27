import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Room = ({ activeTool }) => {
  let classes = "absolute bg-blue-400 inset-0";
  if (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM || activeTool === toolTypes.SPONGE) {
    classes += " cursor-pointer";
  }
  return <div className={classes} data-testid="Room"></div>;
};

Room.propTypes = {
  activeTool: PropTypes.string
};

Room.defaultProps = {
  activeTool: null
};

export default Room;
