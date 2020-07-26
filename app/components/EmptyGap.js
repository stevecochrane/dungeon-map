import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const EmptyGap = ({ activeTool }) => {
  let classes = "absolute bg-white inset-0 z-10";
  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    classes += " cursor-pointer transition-bg hover:transition-none hover:bg-gray-400 hover:z-20";
  }
  return <div className={classes} data-testid="EmptyGap"></div>;
};

EmptyGap.propTypes = {
  activeTool: PropTypes.string
};

EmptyGap.defaultProps = {
  activeTool: null
};

export default EmptyGap;
