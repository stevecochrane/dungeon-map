import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import App from "../components/App";
import { changeTool } from "../actions/tools.actions";
import toolTypes from "../constants/toolTypes";

class DungeonMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onToolClick = this.onToolClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onToolClick(id = "", name = "") {
    this.props.changeTool(id, name);
  }

  handleKeyPress(event) {
    let selectedTool = null;
    switch (event.code) {
      case "KeyW":
        selectedTool = toolTypes.WALL;
        break;
      case "KeyR":
        selectedTool = toolTypes.ROOM;
        break;
      case "KeyD":
        selectedTool = toolTypes.DOOR;
        break;
    }
    if (selectedTool) {
      this.props.changeTool(selectedTool);
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
        <App activeTool={this.props.tools.activeTool} onToolClick={this.onToolClick} />
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
  return bindActionCreators(
    {
      changeTool
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonMap);
