import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";

const Note = ({ activeTool }) => {
  let roomClasses = "absolute bg-blue-400 inset-0";
  if (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM) {
    roomClasses += " cursor-pointer duration-200 transition-colors hover:transition-none";
  }
  const noteWrapperClasses = "absolute bottom-0 left-1 right-0 top-1";
  const noteClasses = "bg-yellow-600 h-4 vertical-center w-4";

  return (
    <div className={roomClasses} data-testid="Note">
      <div className={noteWrapperClasses}>
        <div className={noteClasses}></div>
      </div>
    </div>
  );
};

Note.propTypes = {
  activeTool: PropTypes.string
};

Note.defaultProps = {
  activeTool: null
};

export default Note;
