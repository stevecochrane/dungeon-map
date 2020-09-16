import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const BlankLine = ({ activeTool, orientation }) => {
  let classes = "absolute bg-gray-400 transform z-10";

  if (orientation === "vertical") {
    classes += " inset-y-0 left-1/2 -translate-x-1/2 w-line";
  } else {
    classes += " h-line inset-x-0 -translate-y-1/2 top-1/2";
  }

  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes +=
      " duration-300 transition-colors group-hover:bg-gray-600 group-hover:transition-none group-hover:z-20";
  }

  return <div className={classes} data-testid="BlankLine"></div>;
};

BlankLine.propTypes = {
  activeTool: PropTypes.string,
  orientation: PropTypes.string
};

BlankLine.defaultProps = {
  activeTool: null,
  orientation: "vertical"
};

export default BlankLine;
