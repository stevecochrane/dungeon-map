import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import toolTypes from "../constants/toolTypes";
import Tool from "./Tool";

const Wrapper = tw.div`absolute border border-gray-200 bg-white bottom-0 m-5 p-2 right-0 rounded shadow-sm`;

const ToolPalette = ({ activeTool, onToolClick }) => {
  let tools = [];
  for (const id of Object.values(toolTypes)) {
    tools.push(<Tool key={id} id={id} activeTool={activeTool} onToolClick={onToolClick} />);
  }

  return <Wrapper data-testid="ToolPalette">{tools}</Wrapper>;
};

ToolPalette.propTypes = {
  activeTool: PropTypes.string,
  onToolClick: PropTypes.func
};

export default ToolPalette;
