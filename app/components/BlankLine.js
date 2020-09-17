import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const BlankLine = ({ activeTool }) => {
  let classes = "absolute bg-gray-400 inset-0 z-10";

  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes +=
      " duration-300 transition-colors group-hover:bg-gray-600 group-hover:-inset-halfLine group-hover:transition-none group-hover:z-20";
  }

  return <div className={classes} data-testid="BlankLine"></div>;
};

BlankLine.propTypes = {
  activeTool: PropTypes.string
};

BlankLine.defaultProps = {
  activeTool: null
};

export default BlankLine;
