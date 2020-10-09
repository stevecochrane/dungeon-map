import React from "react";
import PropTypes from "prop-types";
import toolTypes from "../constants/toolTypes";
import Tool from "./Tool";

const ToolPalette = ({ activeTool, onToolClick }) => {
  let tools = [];
  for (const id of Object.values(toolTypes)) {
    tools.push(<Tool key={id} id={id} activeTool={activeTool} onToolClick={onToolClick} />);
  }
  return (
    <div
      className="absolute border border-gray-200 bg-white bottom-0 m-5 p-2 right-0 rounded shadow-sm"
      data-testid="ToolPalette"
    >
      {tools}
    </div>
  );
};

ToolPalette.propTypes = {
  activeTool: PropTypes.string,
  onToolClick: PropTypes.func
};

export default ToolPalette;
