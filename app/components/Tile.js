import React, { useState } from "react";
import PropTypes from "prop-types";
import Line from "./Line";
import tileTypes from "../constants/tileTypes";
import toolTypes from "../constants/toolTypes";

const Tile = ({ activeTool, hasBottomLine, hasRightLine, tileType }) => {
  const [type, setType] = useState(tileType);

  const toggleTile = () => {
    if (activeTool === toolTypes.ROOM) {
      if (type === tileTypes.EMPTY) {
        setType(tileTypes.ROOM);
      } else {
        setType(tileTypes.EMPTY);
      }
    }
  };

  let tileSurfaceClassName = "absolute inset-0";
  if (activeTool === toolTypes.ROOM) {
    tileSurfaceClassName += " cursor-pointer transition-bg hover:transition-none";
  }
  if (type === tileTypes.ROOM) {
    tileSurfaceClassName += " bg-blue-400";
  } else {
    tileSurfaceClassName += " bg-gray-200";

    if (activeTool === toolTypes.ROOM) {
      tileSurfaceClassName += " hover:bg-gray-400";
    }
  }

  let tileClassName = "relative";
  if (hasRightLine) {
    tileClassName += " w-12";
  } else {
    tileClassName += " w-11";
  }

  if (hasBottomLine) {
    tileClassName += " h-12";
  } else {
    tileClassName += " h-11";
  }

  return (
    <div className={tileClassName} data-testid="Tile">
      <Line side="top" extendedHorizontally={hasRightLine} activeTool={activeTool} />
      <Line side="left" extendedVertically={hasBottomLine} activeTool={activeTool} />
      {hasRightLine && (
        <Line side="right" extendedVertically={hasBottomLine} activeTool={activeTool} />
      )}
      {hasBottomLine && (
        <Line side="bottom" extendedHorizontally={hasRightLine} activeTool={activeTool} />
      )}
      <div
        className={tileSurfaceClassName}
        data-type={type}
        data-testid="Tile-surface"
        onMouseDown={toggleTile}
      ></div>
    </div>
  );
};

Tile.propTypes = {
  activeTool: PropTypes.string,
  hasRightLine: PropTypes.bool,
  hasBottomLine: PropTypes.bool,
  tileType: PropTypes.string
};

Tile.defaultProps = {
  activeTool: null,
  hasRightLine: false,
  hasBottomLine: false,
  tileType: tileTypes.EMPTY
};

export default Tile;
