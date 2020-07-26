import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Door = ({ activeTool }) => {
  let classes = "absolute bg-green-600 inset-0 z-30";
  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes += " cursor-pointer transition-bg hover:transition-none";
  }
  return <div className={classes} data-testid="Door"></div>;
};

Door.propTypes = {
  activeTool: PropTypes.string
};

Door.defaultProps = {
  activeTool: null
};

export default Door;
