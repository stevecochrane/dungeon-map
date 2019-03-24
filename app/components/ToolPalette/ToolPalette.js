import React from "react";
import PropTypes from "prop-types";
import Tool from "../Tool/Tool";
import { getTools } from "../../config";
import "./ToolPalette.css";

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
		<div className="ToolPalette absolute pin-r pin-b">
			{tools}
		</div>
	);
};

ToolPalette.propTypes = {
	activeTool: PropTypes.string,
	onToolClick: PropTypes.func
};

export default ToolPalette;
