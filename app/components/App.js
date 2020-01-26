import React from "react";
import PropTypes from "prop-types";
import Map from "../Map/Map";
import ToolPalette from "../ToolPalette/ToolPalette";

const App = ({activeTool, onToolClick}) => {
	return (
		<div className="flex flex-col flex-grow">
			<h1 className="font-bold py-8 text-3xl text-center">Dungeon Map</h1>
			<Map rows={10} columns={10} className="flex flex-grow flex-col justify-center" />
			<ToolPalette activeTool={activeTool} onToolClick={onToolClick} />
		</div>
	);
};

App.propTypes = {
	activeTool: PropTypes.string,
	onToolClick: PropTypes.func
};

export default App;
