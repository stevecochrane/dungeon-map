import React, { useState } from "react";
import lineTypes from "../constants/lineTypes";
import toolTypes from "../constants/toolTypes";
import BlankLine from "./BlankLine";
import Door from "./Door";
import Wall from "./Wall";

type Props = {
  activeTool: string | null;
  isMouseDown: boolean;
  side: string;
  extendedHorizontally?: boolean;
  extendedVertically?: boolean;
  lineType?: string;
};

type DirectionMap = {
  bottom: string;
  left: string;
  right: string;
  top: string;
};

const Line = ({
  activeTool = null,
  isMouseDown = false,
  side = "top",
  extendedHorizontally = false,
  extendedVertically = false,
  lineType = lineTypes.EMPTY
}: Props): JSX.Element => {
  const [type, setType] = useState(lineType);

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

  const orientation = side === "top" || side === "bottom" ? "horizontal" : "vertical";

  let baseClasses = "absolute group";

  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.ERASER || activeTool === toolTypes.WALL) {
    baseClasses += " cursor-pointer";
  } else {
    baseClasses += " pointer-events-none";
  }

  const sideClasses: DirectionMap = {
    top: "h-line top-0 left-0",
    left: "w-line top-0 left-0",
    right: "w-line top-0 right-0",
    bottom: "h-line bottom-0 left-0"
  };

  let classes = `${baseClasses} ${sideClasses[side as keyof DirectionMap]}`;

  if (orientation === "horizontal") {
    if (extendedHorizontally) {
      classes += " right-0";
    } else {
      classes += " -right-line";
    }
  } else {
    if (extendedVertically) {
      classes += " bottom-0";
    } else {
      classes += " -bottom-line";
    }
  }

  let extendedAreaClasses = "absolute transform z-30";

  if (orientation === "horizontal") {
    extendedAreaClasses += " h-6 left-1 right-1 -translate-y-1/2";
  } else {
    extendedAreaClasses += " bottom-1 top-1 -translate-x-1/2 w-6";
  }

  return (
    <div
      className={classes}
      data-testid="Line"
      data-type={type}
      onMouseDown={changeLine}
      onMouseEnter={handleMouseEnter}
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
      <div className={extendedAreaClasses}></div>
    </div>
  );
};

export default Line;
