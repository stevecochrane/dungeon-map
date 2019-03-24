import React from "react";
import PropTypes from "prop-types";
import "./Tool.css";

const Tool = ({id, name, activeTool, onToolClick}) => {
	let className = `Tool Tool--${id}`;
	if (id === activeTool) {
		className += " is-active";
	}
	return(
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
