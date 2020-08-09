import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const BlankLine = ({ activeTool }) => {
  let classes = "absolute bg-white inset-0 z-10";
  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes +=
      " cursor-pointer duration-300 transition-colors hover:bg-gray-400 hover:transition-none hover:z-20";
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
