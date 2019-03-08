import React, { Component } from "react";
// import PropTypes from "prop-types";
import Tool from "../Tool/Tool";
import "./ToolPalette.css";

class ToolPalette extends Component {

	render() {
		return(
			<div className="ToolPalette absolute pin-r pin-b">
				<Tool />
				<Tool />
			</div>
		);
	}

}

// ToolPalette.propTypes = {};
// ToolPalette.defaultProps = {};

export default ToolPalette;
