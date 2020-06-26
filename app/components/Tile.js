import React, { useState } from "react";
import PropTypes from "prop-types";
import Wall from "./Wall";
import tileTypes from "../constants/tileTypes";
import toolTypes from "../constants/toolTypes";

const Tile = ({ activeTool, hasBottomWall, hasRightWall, tileType }) => {
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

  let tileClassName = "Tile relative";
  if (hasRightWall) {
    tileClassName += " w-12";
  } else {
    tileClassName += " w-11";
  }

  if (hasBottomWall) {
    tileClassName += " h-12";
  } else {
    tileClassName += " h-11";
  }

  return (
    <div className={tileClassName} data-testid="Tile">
      <Wall side="top" extendedHorizontally={hasRightWall} activeTool={activeTool} />
      <Wall side="left" extendedVertically={hasBottomWall} activeTool={activeTool} />
      {hasRightWall && (
        <Wall side="right" extendedVertically={hasBottomWall} activeTool={activeTool} />
      )}
      {hasBottomWall && (
        <Wall side="bottom" extendedHorizontally={hasRightWall} activeTool={activeTool} />
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
  hasRightWall: PropTypes.bool,
  hasBottomWall: PropTypes.bool,
  tileType: PropTypes.string
};

Tile.defaultProps = {
  activeTool: null,
  hasRightWall: false,
  hasBottomWall: false,
  tileType: tileTypes.EMPTY
};

export default Tile;
