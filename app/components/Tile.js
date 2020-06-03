import React, { useState } from "react";
import PropTypes from "prop-types";
import Wall from "./Wall";

const Tile = ({ activeTool, hasBottomWall, hasRightWall }) => {
  const [active, setActive] = useState(false);

  const toggleTile = () => {
    if (activeTool === "room") {
      setActive(!active);
    }
  };

  let tileSurfaceClassName = "absolute inset-0";
  if (activeTool === "room") {
    tileSurfaceClassName += " cursor-pointer transition-bg hover:transition-none";
  }
  if (active) {
    tileSurfaceClassName += " bg-blue-400";
  } else {
    tileSurfaceClassName += " bg-gray-200";

    if (activeTool === "room") {
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
        data-active={active}
        data-testid="Tile-surface"
        onMouseDown={toggleTile}
      ></div>
    </div>
  );
};

Tile.propTypes = {
  activeTool: PropTypes.string,
  hasRightWall: PropTypes.bool,
  hasBottomWall: PropTypes.bool
};

Tile.defaultProps = {
  activeTool: null,
  hasRightWall: false,
  hasBottomWall: false
};

export default Tile;
