import React, { useState } from "react";
import PropTypes from "prop-types";
import gapTypes from "../constants/gapTypes";
import toolTypes from "../constants/toolTypes";
import Door from "./Door";
import EmptyGap from "./EmptyGap";
import Wall from "./Wall";

const Gap = ({ activeTool, extendedHorizontally, extendedVertically, gapType, side }) => {
  const [type, setType] = useState(gapType);

  const changeGap = () => {
    switch (activeTool) {
      case toolTypes.DOOR:
        setType(type === gapTypes.DOOR ? gapTypes.EMPTY : gapTypes.DOOR);
        break;
      case toolTypes.WALL:
        setType(type === gapTypes.WALL ? gapTypes.EMPTY : gapTypes.WALL);
        break;
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
    <div className={classes} data-testid="Gap" data-type={type} onMouseDown={changeGap}>
      {(() => {
        switch (type) {
          case gapTypes.DOOR:
            return <Door activeTool={activeTool}></Door>;
          case gapTypes.EMPTY:
            return <EmptyGap activeTool={activeTool}></EmptyGap>;
          case gapTypes.WALL:
            return <Wall activeTool={activeTool}></Wall>;
          default:
            return null;
        }
      })()}
    </div>
  );
};

Gap.propTypes = {
  activeTool: PropTypes.string,
  extendedHorizontally: PropTypes.bool,
  extendedVertically: PropTypes.bool,
  gapType: PropTypes.string,
  side: PropTypes.string
};

Gap.defaultProps = {
  activeTool: null,
  extendedHorizontally: false,
  extendedVertically: false,
  gapType: gapTypes.EMPTY,
  side: "top"
};

export default Gap;
