import React, { useState } from "react";
import PropTypes from "prop-types";

const Wall = ({ extendedHorizontally, extendedVertically, side }) => {
  const [active, setActive] = useState(false);

  const toggleWall = () => {
    setActive(!active);
  };

  const baseClasses = "Wall absolute cursor-pointer transition-bg hover:transition-none";
  const activeClasses = "bg-blue-600 z-30";
  const inactiveClasses = "bg-white hover:bg-gray-400 z-10 hover:z-20";

  const sideClasses = {
    top: "h-1 top-0 left-0",
    left: "w-1 top-0 left-0",
    right: "w-1 top-0 right-0",
    bottom: "h-1 bottom-0 left-0"
  };

  let classes = `${baseClasses} ${sideClasses[side]}`;
  if (active) {
    classes = `${classes} ${activeClasses}`;
  } else {
    classes += `${classes} ${inactiveClasses}`;
  }

  if (side === "top" || side === "bottom") {
    if (extendedHorizontally) {
      classes += " right-0";
    } else {
      classes += " -right-1";
    }
  } else if (side === "left" || side === "right") {
    if (extendedVertically) {
      classes += " bottom-0";
    } else {
      classes += " -bottom-1";
    }
  }

  return (
    <div
      className={classes}
      onClick={() => {
        toggleWall();
      }}
    ></div>
  );
};

Wall.propTypes = {
  extendedHorizontally: PropTypes.bool,
  extendedVertically: PropTypes.bool,
  side: PropTypes.string
};

Wall.defaultProps = {
  extendedHorizontally: false,
  extendedVertically: false,
  side: "top"
};

export default Wall;
