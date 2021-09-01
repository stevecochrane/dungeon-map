import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import App from "../components/App";
import { changeTool } from "../actions/tools.actions";
import { changeMouseDown } from "../actions/mouse.actions";
import toolTypes from "../constants/toolTypes";

/** TODO: Separate types into their own files to be reused by reducers and actions */
type Props = {
  changeMouseDown: (isMouseDown: boolean) => { type: string; payload: { isMouseDown: boolean } };
  changeTool: (toolId: string) => { type: string; payload: { tool: string } };
  mouse: { isMouseDown: boolean };
  tools: { activeTool: string };
};

type ReduxState = {
  mouse: { isMouseDown: boolean };
  tools: { activeTool: string };
};

class DungeonMap extends React.Component<Props> {
  constructor(props: Props) {
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

  handleKeyPress(event: KeyboardEvent) {
    let selectedTool = null;
    switch (event.code) {
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
      case "KeyE": {
        selectedTool = toolTypes.ERASER;
        break;
      }
      case "KeyW": {
        selectedTool = toolTypes.WALL;
        break;
      }
      case "KeyS": {
        selectedTool = toolTypes.SPONGE;
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

function mapStateToProps(state: ReduxState) {
  return {
    mouse: state.mouse,
    tools: state.tools
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      changeTool,
      changeMouseDown
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonMap);
