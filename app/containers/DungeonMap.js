import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import App from "../components/App/App";
import { changeTool } from "../actions/tools.actions";

class DungeonMap extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.onToolClick = this.onToolClick.bind(this);
	}

	onToolClick(id="", name="") {
		this.props.changeTool(id, name);
	}

	render() {
		return(
			<React.Fragment>
				<App
					activeTool={this.props.tools.activeTool}
					onToolClick={this.onToolClick}
				/>
			</React.Fragment>
		);
	}

}

DungeonMap.propTypes = {
	changeTool: PropTypes.func,
	tools: PropTypes.objectOf(PropTypes.string)
};

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
