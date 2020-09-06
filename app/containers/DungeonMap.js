import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import App from "../components/App";
import { changeTool } from "../actions/tools.actions";
import { changeMouseDown } from "../actions/mouse.actions";
import toolTypes from "../constants/toolTypes";

class DungeonMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onToolClick = this.onToolClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  onToolClick(toolId = "") {
    this.props.changeTool(toolId);
  }

  handleKeyPress(event) {
    let selectedTool = null;
    switch (event.code) {
      case "KeyW": {
        selectedTool = toolTypes.WALL;
        break;
      }
      case "KeyR": {
        selectedTool = toolTypes.ROOM;
        break;
      }
      case "KeyD": {
        selectedTool = toolTypes.DOOR;
        break;
      }
      case "KeyN": {
        selectedTool = toolTypes.NOTE;
        break;
      }
    }
    if (selectedTool) {
      this.props.changeTool(selectedTool);
    }
  }

  handleMouseDown() {
    this.props.changeMouseDown(true);
  }

  handleMouseUp() {
    this.props.changeMouseDown(false);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
    document.addEventListener("mousedown", this.handleMouseDown);
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
    document.removeEventListener("mousedown", this.handleMouseDown);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  render() {
    return (
      <React.Fragment>
        <App
          activeTool={this.props.tools.activeTool}
          isMouseDown={this.props.mouse.isMouseDown}
          onToolClick={this.onToolClick}
        />
      </React.Fragment>
    );
  }
}

DungeonMap.propTypes = {
  changeMouseDown: PropTypes.func,
  changeTool: PropTypes.func,
  mouse: PropTypes.objectOf(PropTypes.bool),
  tools: PropTypes.objectOf(PropTypes.string)
};

function mapStateToProps(state) {
  return {
    mouse: state.mouse,
    tools: state.tools
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeTool,
      changeMouseDown
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonMap);
