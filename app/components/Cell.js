import React, { useState } from "react";
import PropTypes from "prop-types";
import cellTypes from "../constants/cellTypes";
import toolTypes from "../constants/toolTypes";
import BlankCell from "./BlankCell";
import Line from "./Line";
import Note from "./Note";
import Room from "./Room";

const Cell = ({ activeTool, cellType, hasBottomLine, hasRightLine, isMouseDown }) => {
  const [type, setType] = useState(cellType);
  const [localMouseDown, setLocalMouseDown] = useState(false);

  const changeCell = () => {
    switch (activeTool) {
      case toolTypes.NOTE:
        setType(type === cellTypes.NOTE ? cellTypes.EMPTY : cellTypes.NOTE);
        break;
      case toolTypes.ROOM:
        setType(type === cellTypes.ROOM ? cellTypes.EMPTY : cellTypes.ROOM);
        break;
    }
  };

  const handleMouseDown = () => {
    setLocalMouseDown(true);
    changeCell();
  };

  const handleMouseUp = () => {
    setLocalMouseDown(false);
  };

  const checkIfDragging = () => {
    if (isMouseDown && !localMouseDown) {
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
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={checkIfDragging}
    >
      <Line side="top" extendedHorizontally={hasRightLine} activeTool={activeTool} />
      <Line side="left" extendedVertically={hasBottomLine} activeTool={activeTool} />
      {hasRightLine && (
        <Line side="right" extendedVertically={hasBottomLine} activeTool={activeTool} />
      )}
      {hasBottomLine && (
        <Line side="bottom" extendedHorizontally={hasRightLine} activeTool={activeTool} />
      )}
      {(() => {
        switch (type) {
          case cellTypes.EMPTY:
            return <BlankCell activeTool={activeTool}></BlankCell>;
          case cellTypes.NOTE:
            return <Note activeTool={activeTool}></Note>;
          case cellTypes.ROOM:
            return <Room activeTool={activeTool}></Room>;
          default:
            return null;
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
