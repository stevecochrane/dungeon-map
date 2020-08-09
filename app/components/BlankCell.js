import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const BlankCell = ({ activeTool }) => {
  let classes = "absolute bg-gray-200 inset-0";
  if (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM) {
    classes +=
      " cursor-pointer duration-300 transition-colors hover:bg-gray-400 hover:transition-none";
  }
  return <div className={classes} data-testid="BlankCell"></div>;
};

BlankCell.propTypes = {
  activeTool: PropTypes.string
};

BlankCell.defaultProps = {
  activeTool: null
};

export default BlankCell;
