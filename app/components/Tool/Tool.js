import React from "react";
import PropTypes from "prop-types";
import "./Tool.css";

const Tool = ({id, name}) => {
	return(
		<div className="Tool" data-id={id} data-name={name}></div>
	);
};

Tool.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string
};

export default Tool;
