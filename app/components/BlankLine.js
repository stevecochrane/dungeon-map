import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const BlankLine = ({ activeTool }) => {
  let classes = "absolute bg-gray-400 inset-0 z-10";
  let activeClasses = "absolute bg-gray-600 -inset-halfLine opacity-0";

  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes += " group-hover:z-20";
    activeClasses += " group-hover:opacity-100";
  }

  return (
    <div className={classes} data-testid="BlankLine">
      <div className={activeClasses}></div>
    </div>
  );
};

BlankLine.propTypes = {
  activeTool: PropTypes.string
};

BlankLine.defaultProps = {
  activeTool: null
};

export default BlankLine;
