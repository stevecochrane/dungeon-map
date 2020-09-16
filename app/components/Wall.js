import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Wall = ({ activeTool, orientation }) => {
  let classes = "absolute bg-blue-600 inset-0 z-30";

  if (orientation === "vertical") {
    classes += " transform -translate-x-1/2 w-1";
  } else {
    classes += " transform -translate-y-1/2 h-1";
  }

  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes += " duration-300 transition-colors group-hover:transition-none";
  }

  return <div className={classes} data-testid="Wall"></div>;
};

Wall.propTypes = {
  activeTool: PropTypes.string,
  orientation: PropTypes.string
};

Wall.defaultProps = {
  activeTool: null,
  orientation: "vertical"
};

export default Wall;
