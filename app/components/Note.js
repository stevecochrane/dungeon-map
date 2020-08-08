import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Note = ({ activeTool }) => {
  let classes = "absolute bg-blue-400 inset-0";
  if (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM) {
    classes += " cursor-pointer duration-200 transition-colors hover:transition-none";
  }
  return <div className={classes} data-testid="Note"></div>;
};

Note.propTypes = {
  activeTool: PropTypes.string
};

Note.defaultProps = {
  activeTool: null
};

export default Note;
