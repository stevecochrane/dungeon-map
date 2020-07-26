import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Door = ({ activeTool, extendedHorizontally, extendedVertically, side }) => {
  let baseClasses = "Door absolute bg-green-600 z-30";
  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    baseClasses += " cursor-pointer transition-bg hover:transition-none";
  }

  const sideClasses = {
    top: "h-1 top-0 left-0",
    left: "w-1 top-0 left-0",
    right: "w-1 top-0 right-0",
    bottom: "h-1 bottom-0 left-0"
  };

  let classes = `${baseClasses} ${sideClasses[side]}`;

  if (side === "top" || side === "bottom") {
    if (extendedHorizontally) {
      classes += " right-0";
    } else {
      classes += " -right-1";
    }
  } else if (side === "left" || side === "right") {
    if (extendedVertically) {
      classes += " bottom-0";
    } else {
      classes += " -bottom-1";
    }
  }

  return <div className={classes} data-testid="Door"></div>;
};

Door.propTypes = {
  activeTool: PropTypes.string,
  extendedHorizontally: PropTypes.bool,
  extendedVertically: PropTypes.bool,
  side: PropTypes.string
};

Door.defaultProps = {
  activeTool: null,
  extendedHorizontally: false,
  extendedVertically: false,
  side: "top"
};

export default Door;
