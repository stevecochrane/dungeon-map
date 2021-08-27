import React from "react";
import Map from "./Map";
import ToolPalette from "./ToolPalette";

type Props = {
  activeTool?: string;
  isMouseDown?: boolean;
  onToolClick?: Function;
};

const App = ({ activeTool, isMouseDown, onToolClick }: Props) => {
  return (
    <div className="flex flex-col flex-grow" data-testid="App">
      {/* <h1 className="font-bold py-8 text-3xl text-center">Dungeon Map</h1> */}
      <Map
        activeTool={activeTool}
        className="flex flex-grow flex-col justify-center"
        columns={10}
        isMouseDown={isMouseDown}
        rows={10}
      />
      <ToolPalette activeTool={activeTool} onToolClick={onToolClick} />
    </div>
  );
};

export default App;
