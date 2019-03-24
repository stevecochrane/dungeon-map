import React from "react";
// import PropTypes from "prop-types";
import Tool from "../Tool/Tool";
import { getTools } from "../../config";
import "./ToolPalette.css";

const ToolPalette = () => {
	const tools = getTools().map(tool => (
		<Tool key={tool.id} id={tool.id} name={tool.name} />
	));
	return(
		<div className="ToolPalette absolute pin-r pin-b">
			{tools}
		</div>
	);
};

// ToolPalette.propTypes = {};
// ToolPalette.defaultProps = {};

export default ToolPalette;
