import React, { useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import lineTypes from "../constants/lineTypes";
import toolTypes from "../constants/toolTypes";
import BlankLine from "./BlankLine";
import Door from "./Door";
import Wall from "./Wall";

const DivWrapper = styled.div(({ activeTool, extendedHorizontally, extendedVertically, orientation, side }) => [
  tw`absolute`,
  activeTool === toolTypes.DOOR || activeTool === toolTypes.ERASER || activeTool === toolTypes.WALL
    ? tw`cursor-pointer`
    : tw`pointer-events-none`,
  side === "top" && tw`h-line top-0 left-0`,
  side === "left" && tw`w-line top-0 left-0`,
  side === "right" && tw`w-line top-0 right-0`,
  side === "bottom" && tw`h-line bottom-0 left-0`,
  orientation === "horizontal" && extendedHorizontally ? tw`right-0` : tw`-right-line`,
  orientation === "vertical" && extendedVertically ? tw`bottom-0` : tw`-bottom-line`
]);

const DivExtendedArea = styled.div(({ orientation }) => [
  tw`absolute transform z-30`,
  orientation === "horizontal" ? tw`h-6 left-1 right-1 -translate-y-1/2` : tw`bottom-1 top-1 -translate-x-1/2 w-6`
]);

const Line = ({ activeTool, extendedHorizontally, extendedVertically, isMouseDown, lineType, side }) => {
  const [type, setType] = useState(lineType);
  const orientation = side === "top" || side === "bottom" ? "horizontal" : "vertical";

  const changeLine = () => {
    switch (activeTool) {
      case toolTypes.WALL: {
        setType(lineTypes.WALL);
        break;
      }
      case toolTypes.DOOR: {
        setType(lineTypes.DOOR);
        break;
      }
      case toolTypes.ERASER: {
        setType(lineTypes.EMPTY);
        break;
      }
    }
  };

  const handleMouseEnter = () => {
    if (isMouseDown) {
      changeLine();
    }
  };

  return (
    <DivWrapper
      activeTool={activeTool}
      className="group"
      data-testid="Line"
      data-type={type}
      extendedHorizontally={extendedHorizontally}
      extendedVertically={extendedVertically}
      onMouseDown={changeLine}
      onMouseEnter={handleMouseEnter}
      orientation={orientation}
      side={side}
    >
      {(() => {
        switch (type) {
          case lineTypes.DOOR: {
            return <Door orientation={orientation}></Door>;
          }
          case lineTypes.EMPTY: {
            return <BlankLine activeTool={activeTool}></BlankLine>;
          }
          case lineTypes.WALL: {
            return <Wall />;
          }
          default: {
            return null;
          }
        }
      })()}
      <DivExtendedArea orientation={orientation} />
    </DivWrapper>
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
