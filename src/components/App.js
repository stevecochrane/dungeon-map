import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import Map from "./Map";
import ToolPalette from "./ToolPalette";

const DivWrapper = tw.div`bg-gray-200 flex flex-col font-sans min-h-screen`;
const DivMain = tw.div`flex flex-col flex-grow`;

const App = ({ activeTool, isMouseDown, onToolClick }) => (
  <DivWrapper>
    <DivMain data-testid="App">
      <Map activeTool={activeTool} columns={10} isMouseDown={isMouseDown} rows={10} />
      <ToolPalette activeTool={activeTool} onToolClick={onToolClick} />
    </DivMain>
  </DivWrapper>
);

App.propTypes = {
  activeTool: PropTypes.string,
  isMouseDown: PropTypes.bool,
  onToolClick: PropTypes.func
};

export default App;
