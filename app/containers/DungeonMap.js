import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTool } from "../actions/tools.actions";

class DungeonMap extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.onToolClick = this.onToolClick.bind(this);
	}

	onToolClick() {

	}

	render() {
		return(
			<React.Fragment>
				<App onToolClick={onToolClick} />
			</React.Fragment>
		);
	}

}

function mapStateToProps(state) {
	return {
		tools: state.tools
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeTool
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonMap);
