import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";
import Tooltip from "./Tooltip";

const Note = ({ activeTool }) => {
  let roomClasses = "absolute bg-blue-400 inset-0";
  if (
    activeTool === toolTypes.NOTE ||
    activeTool === toolTypes.ROOM ||
    activeTool === toolTypes.SPONGE
  ) {
    roomClasses += " cursor-pointer duration-300 transition-colors hover:transition-none";
  }

  return (
    <div className={roomClasses} data-testid="Note">
      <div className="absolute bottom-0 left-1 right-0 top-1">
        <div className="bg-yellow-600 h-4 vertical-center w-4 z-40">
          <Tooltip />
        </div>
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
