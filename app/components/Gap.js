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

  return (
    <div data-testid="Gap" data-type={type} onMouseDown={changeGap}>
      {(() => {
        switch (type) {
          case gapTypes.DOOR:
            return (
              <Door
                activeTool={activeTool}
                extendedHorizontally={extendedHorizontally}
                extendedVertically={extendedVertically}
                side={side}
              ></Door>
            );
          case gapTypes.EMPTY:
            return (
              <EmptyGap
                activeTool={activeTool}
                extendedHorizontally={extendedHorizontally}
                extendedVertically={extendedVertically}
                side={side}
              ></EmptyGap>
            );
          case gapTypes.WALL:
            return (
              <Wall
                activeTool={activeTool}
                extendedHorizontally={extendedHorizontally}
                extendedVertically={extendedVertically}
                side={side}
              ></Wall>
            );
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
