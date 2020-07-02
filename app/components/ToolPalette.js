import React from "react";
import PropTypes from "prop-types";
import Tool from "./Tool";
import toolTypes from "../constants/toolTypes";

const ToolPalette = ({ activeTool, onToolClick }) => {
  let tools = [];
  for (const [id, name] of Object.entries(toolTypes)) {
    tools.push(
      <Tool key={id} id={id} name={name} activeTool={activeTool} onToolClick={onToolClick} />
    );
  }
  return (
    <div className="absolute bottom-0 right-0 m-5" data-testid="ToolPalette">
      {tools}
    </div>
  );
};

ToolPalette.propTypes = {
  activeTool: PropTypes.string,
  onToolClick: PropTypes.func
};

export default ToolPalette;
