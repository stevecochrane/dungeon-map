import React, { useState } from "react";
import PropTypes from "prop-types";
import gapTypes from "../constants/gapTypes";
import toolTypes from "../constants/toolTypes";
import EmptyGap from "./EmptyGap";
import Wall from "./Wall";

const Gap = ({ activeTool, extendedHorizontally, extendedVertically, gapType, side }) => {
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

  return (
    <div data-testid="Gap" data-type={type} onMouseDown={toggleWall}>
      {(() => {
        switch (type) {
          case gapTypes.WALL:
            return (
              <Wall
                activeTool={activeTool}
                extendedHorizontally={extendedHorizontally}
                extendedVertically={extendedVertically}
                side={side}
              ></Wall>
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
