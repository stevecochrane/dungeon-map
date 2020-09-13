import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Wall = ({ activeTool }) => {
  let classes = "absolute bg-blue-600 inset-0 z-30";
  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes += " duration-300 transition-colors group-hover:transition-none";
  }
  return <div className={classes} data-testid="Wall"></div>;
};

Wall.propTypes = {
  activeTool: PropTypes.string
};

Wall.defaultProps = {
  activeTool: null
};

export default Wall;
