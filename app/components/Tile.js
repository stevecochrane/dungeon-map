import React, { useState } from "react";
import PropTypes from "prop-types";
import Gap from "./Gap";
import tileTypes from "../constants/tileTypes";
import toolTypes from "../constants/toolTypes";

const Tile = ({ activeTool, hasBottomGap, hasRightGap, tileType }) => {
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
  if (hasRightGap) {
    tileClassName += " w-12";
  } else {
    tileClassName += " w-11";
  }

  if (hasBottomGap) {
    tileClassName += " h-12";
  } else {
    tileClassName += " h-11";
  }

  return (
    <div className={tileClassName} data-testid="Tile">
      <Gap side="top" extendedHorizontally={hasRightGap} activeTool={activeTool} />
      <Gap side="left" extendedVertically={hasBottomGap} activeTool={activeTool} />
      {hasRightGap && (
        <Gap side="right" extendedVertically={hasBottomGap} activeTool={activeTool} />
      )}
      {hasBottomGap && (
        <Gap side="bottom" extendedHorizontally={hasRightGap} activeTool={activeTool} />
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
  hasRightGap: PropTypes.bool,
  hasBottomGap: PropTypes.bool,
  tileType: PropTypes.string
};

Tile.defaultProps = {
  activeTool: null,
  hasRightGap: false,
  hasBottomGap: false,
  tileType: tileTypes.EMPTY
};

export default Tile;
