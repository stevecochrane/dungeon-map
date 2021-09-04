import React, { useState } from "react";
import cellTypes from "../constants/cellTypes";
import toolTypes from "../constants/toolTypes";
import BlankCell from "./BlankCell";
import Line from "./Line";
import Note from "./Note";
import Room from "./Room";

type Props = {
  activeTool: string | null;
  cellType: string;
  hasBottomLine: boolean;
  hasRightLine: boolean;
  isMouseDown: boolean;
};

const Cell = ({
  activeTool = null,
  cellType = cellTypes.EMPTY,
  hasBottomLine = false,
  hasRightLine = false,
  isMouseDown = false
}: Props): JSX.Element => {
  const [type, setType] = useState(cellType);

  const changeCell = () => {
    switch (activeTool) {
      case toolTypes.NOTE: {
        setType(cellTypes.NOTE);
        break;
      }
      case toolTypes.ROOM: {
        setType(cellTypes.ROOM);
        break;
      }
      case toolTypes.SPONGE: {
        setType(cellTypes.EMPTY);
        break;
      }
    }
  };

  const handleMouseEnter = () => {
    if (isMouseDown) {
      changeCell();
    }
  };

  let classes = "relative";
  if (hasRightLine) {
    classes += " w-12";
  } else {
    classes += " w-11";
  }

  if (hasBottomLine) {
    classes += " h-12";
  } else {
    classes += " h-11";
  }

  return (
    <div
      className={classes}
      data-testid="Cell"
      data-type={type}
      onMouseDown={changeCell}
      onMouseEnter={handleMouseEnter}
    >
      <Line activeTool={activeTool} extendedHorizontally={hasRightLine} isMouseDown={isMouseDown} side="top" />
      <Line activeTool={activeTool} extendedVertically={hasBottomLine} isMouseDown={isMouseDown} side="left" />
      {hasRightLine && (
        <Line activeTool={activeTool} extendedVertically={hasBottomLine} isMouseDown={isMouseDown} side="right" />
      )}
      {hasBottomLine && (
        <Line activeTool={activeTool} extendedHorizontally={hasRightLine} isMouseDown={isMouseDown} side="bottom" />
      )}
      {(() => {
        switch (type) {
          case cellTypes.EMPTY: {
            return <BlankCell activeTool={activeTool}></BlankCell>;
          }
          case cellTypes.NOTE: {
            return <Note activeTool={activeTool}></Note>;
          }
          case cellTypes.ROOM: {
            return <Room activeTool={activeTool}></Room>;
          }
          default: {
            return null;
          }
        }
      })()}
    </div>
  );
};

export default Cell;
