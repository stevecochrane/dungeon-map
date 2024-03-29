import React from "react";
import toolTypes from "../constants/toolTypes";
import Tool from "./Tool";

type Props = {
  activeTool: string;
  onToolClick: (id: string) => void;
};

const ToolPalette = ({ activeTool, onToolClick }: Props): JSX.Element => {
  const tools = [];
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

export default ToolPalette;
