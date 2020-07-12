import React, { useState } from "react";
import PropTypes from "prop-types";
import gapTypes from "../constants/gapTypes";
import toolTypes from "../constants/toolTypes";

const Wall = ({ activeTool, extendedHorizontally, extendedVertically, gapType, side }) => {
  const [type, setType] = useState(gapType);

  const toggleWall = () => {
    if (activeTool === toolTypes.WALL) {
      if (type === gapTypes.EMPTY) {
        setType(gapTypes.WALL);
      } else {
        setType(gapTypes.EMPTY);
      }
    }
  };

  let baseClasses = "Wall absolute";
  let activeClasses = "bg-blue-600 z-30";
  let inactiveClasses = "bg-white z-10";

  if (activeTool === "wall") {
    baseClasses += " cursor-pointer transition-bg hover:transition-none";
    inactiveClasses += " hover:bg-gray-400 hover:z-20";
  }

  const sideClasses = {
    top: "h-1 top-0 left-0",
    left: "w-1 top-0 left-0",
    right: "w-1 top-0 right-0",
    bottom: "h-1 bottom-0 left-0"
  };

  let classes = `${baseClasses} ${sideClasses[side]}`;
  if (type === gapTypes.WALL) {
    classes = `${classes} ${activeClasses}`;
  } else {
    classes += `${classes} ${inactiveClasses}`;
  }

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

  return (
    <div className={classes} data-type={type} data-testid="Wall" onMouseDown={toggleWall}></div>
  );
};

Wall.propTypes = {
  activeTool: PropTypes.string,
  extendedHorizontally: PropTypes.bool,
  extendedVertically: PropTypes.bool,
  gapType: PropTypes.string,
  side: PropTypes.string
};

Wall.defaultProps = {
  activeTool: null,
  extendedHorizontally: false,
  extendedVertically: false,
  gapType: gapTypes.EMPTY,
  side: "top"
};

export default Wall;
