import React from "react";
import PropTypes from "prop-types";
import Tool from "../Tool/Tool";
import { getTools } from "../../config";
import "./ToolPalette.css";

const ToolPalette = ({onToolClick}) => {
	const tools = getTools().map(tool => (
		<Tool
			key={tool.id}
			id={tool.id}
			name={tool.name}
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
	onToolClick: PropTypes.func
};

export default ToolPalette;
