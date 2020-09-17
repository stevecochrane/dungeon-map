import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Door = ({ activeTool, orientation }) => {
  let wallClasses = "absolute bg-blue-600 -inset-halfLine z-30";
  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    wallClasses += " duration-300 transition-colors group-hover:transition-none";
  }

  let doorClasses = "bg-yellow-600 pointer-events-none vertical-center";
  if (orientation === "vertical") {
    doorClasses += " h-4 w-2";
  } else {
    doorClasses += " h-2 w-4";
  }

  return (
    <div className={wallClasses} data-testid="Door">
      <div className={doorClasses}></div>
    </div>
  );
};

Door.propTypes = {
  activeTool: PropTypes.string,
  orientation: PropTypes.string
};

Door.defaultProps = {
  activeTool: null,
  orientation: "vertical"
};

export default Door;
