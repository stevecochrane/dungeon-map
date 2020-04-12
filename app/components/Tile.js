import React, { useState } from "react";
import PropTypes from "prop-types";
import Wall from "./Wall";

const Tile = ({ hasRightWall, hasBottomWall }) => {
  const [active, setActive] = useState(false);

  const toggleTile = () => {
    setActive(!active);
  };

  let tileSurfaceClassName = "absolute inset-0 cursor-pointer transition-bg hover:transition-none";
  if (active) {
    tileSurfaceClassName += " bg-blue-400";
  } else {
    tileSurfaceClassName += " bg-gray-200 hover:bg-gray-400";
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
      <Wall side="top" extendedHorizontally={hasRightWall} />
      <Wall side="left" extendedVertically={hasBottomWall} />
      {hasRightWall && <Wall side="right" extendedVertically={hasBottomWall} />}
      {hasBottomWall && <Wall side="bottom" extendedHorizontally={hasRightWall} />}
      <div
        className={tileSurfaceClassName}
        data-active={active}
        data-testid="Tile-surface"
        onClick={() => {
          toggleTile();
        }}
      ></div>
    </div>
  );
};

Tile.propTypes = {
  hasRightWall: PropTypes.bool,
  hasBottomWall: PropTypes.bool
};

Tile.defaultProps = {
  hasRightWall: false,
  hasBottomWall: false
};

export default Tile;
