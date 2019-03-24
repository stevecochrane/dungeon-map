import React from "react";
import PropTypes from "prop-types";
import "./Tool.css";

const Tool = ({id, name, onToolClick}) => {
	return(
		<div
				className="Tool"
				data-id={id}
				data-name={name}
				onClick={() => onToolClick(id, name)}>
		</div>
	);
};

Tool.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	onToolClick: PropTypes.func
};

export default Tool;
