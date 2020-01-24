import React from "react";
import PropTypes from "prop-types";

const Tool = ({id, name, activeTool, onToolClick}) => {
	let className = "w-12 h-12 m-2 cursor-pointer bg-yellow-200 transition-bg hover:bg-yellow-400";
	if (id === activeTool) {
		// TODO: active styles
	}
	return (
		<div
				className={className}
				data-id={id}
				data-name={name}
				onClick={() => onToolClick(id, name)}>
		</div>
	);
};

Tool.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	activeTool: PropTypes.string,
	onToolClick: PropTypes.func
};

export default Tool;
