import React, { useState } from "react";
import PropTypes from "prop-types";
import lineTypes from "../constants/lineTypes";
import toolTypes from "../constants/toolTypes";
import BlankLine from "./BlankLine";
import Door from "./Door";
import Wall from "./Wall";

const Line = ({
  activeTool,
  extendedHorizontally,
  extendedVertically,
  isMouseDown,
  lineType,
  side
}) => {
  const [type, setType] = useState(lineType);
  const [localMouseDown, setLocalMouseDown] = useState(false);

  const changeLine = () => {
    switch (activeTool) {
      case toolTypes.DOOR:
        setType(type === lineTypes.DOOR ? lineTypes.EMPTY : lineTypes.DOOR);
        break;
      case toolTypes.WALL:
        setType(type === lineTypes.WALL ? lineTypes.EMPTY : lineTypes.WALL);
        break;
    }
  };

  const handleMouseDown = () => {
    setLocalMouseDown(true);
    changeLine();
  };

  const clearLocalMouseDown = () => {
    setLocalMouseDown(false);
  };

  const handleDraggingOnEntry = () => {
    if (isMouseDown && !localMouseDown) {
      changeLine();
    }
  };

  let baseClasses = "absolute";

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

  return (
    <div
      className={classes}
      data-testid="Line"
      data-type={type}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleDraggingOnEntry}
      onMouseLeave={clearLocalMouseDown}
      onMouseUp={clearLocalMouseDown}
    >
      {(() => {
        switch (type) {
          case lineTypes.DOOR:
            return <Door activeTool={activeTool}></Door>;
          case lineTypes.EMPTY:
            return <BlankLine activeTool={activeTool}></BlankLine>;
          case lineTypes.WALL:
            return <Wall activeTool={activeTool}></Wall>;
          default:
            return null;
        }
      })()}
    </div>
  );
};

Line.propTypes = {
  activeTool: PropTypes.string,
  extendedHorizontally: PropTypes.bool,
  extendedVertically: PropTypes.bool,
  isMouseDown: PropTypes.bool,
  lineType: PropTypes.string,
  side: PropTypes.string
};

Line.defaultProps = {
  activeTool: null,
  extendedHorizontally: false,
  extendedVertically: false,
  isMouseDown: false,
  lineType: lineTypes.EMPTY,
  side: "top"
};

export default Line;
