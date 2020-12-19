import React from "react";
import PropTypes from "prop-types";
import "twin.macro";
import Map from "./Map";
import ToolPalette from "./ToolPalette";

const App = ({ activeTool, isMouseDown, onToolClick }) => {
  return (
    <div tw="flex flex-col flex-grow" data-testid="App">
      {/* <h1 className="font-bold py-8 text-3xl text-center">Dungeon Map</h1> */}
      <Map
        activeTool={activeTool}
        tw="flex flex-grow flex-col justify-center"
        columns={10}
        isMouseDown={isMouseDown}
        rows={10}
      />
      <ToolPalette activeTool={activeTool} onToolClick={onToolClick} />
    </div>
  );
};

App.propTypes = {
  activeTool: PropTypes.string,
  isMouseDown: PropTypes.bool,
  onToolClick: PropTypes.func
};

export default App;
