import React from "react";
import PropTypes from "prop-types";
import Tool from "../Tool/Tool";
import { getTools } from "../../config";

const ToolPalette = ({activeTool, onToolClick}) => {
  const tools = getTools().map(tool => (
    <Tool
      key={tool.id}
      id={tool.id}
      name={tool.name}
      activeTool={activeTool}
      onToolClick={onToolClick}
    />
  ));
  return(
    <div className="absolute bottom-0 right-0 m-5">
      {tools}
    </div>
  );
};

ToolPalette.propTypes = {
  activeTool: PropTypes.string,
  onToolClick: PropTypes.func
};

export default ToolPalette;
