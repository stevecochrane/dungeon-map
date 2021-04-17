import React, { useState } from "react";
import PropTypes from "prop-types";
import cellTypes from "../constants/cellTypes";
import toolTypes from "../constants/toolTypes";
import BlankCell from "./BlankCell";
import Line from "./Line";
import Note from "./Note";
import Room from "./Room.tsx";

const Cell = ({ activeTool, cellType, hasBottomLine, hasRightLine, isMouseDown }) => {
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

Cell.propTypes = {
  activeTool: PropTypes.string,
  cellType: PropTypes.string,
  hasRightLine: PropTypes.bool,
  hasBottomLine: PropTypes.bool,
  isMouseDown: PropTypes.bool
};

Cell.defaultProps = {
  activeTool: null,
  cellType: cellTypes.EMPTY,
  hasRightLine: false,
  hasBottomLine: false,
  isMouseDown: false
};

export default Cell;
