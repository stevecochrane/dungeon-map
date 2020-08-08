import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Door = ({ activeTool }) => {
  let wallClasses = "absolute bg-blue-600 inset-0 z-30";
  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    wallClasses += " cursor-pointer duration-200 transition-colors hover:transition-none";
  }
  const doorClasses = "bg-yellow-600 h-4 vertical-center w-2";

  return (
    <div className={wallClasses} data-testid="Door">
      <div className={doorClasses}></div>
    </div>
  );
};

Door.propTypes = {
  activeTool: PropTypes.string
};

Door.defaultProps = {
  activeTool: null
};

export default Door;
