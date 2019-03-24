import React from "react";
import PropTypes from "prop-types";
import Map from "../Map/Map";
import ToolPalette from "../ToolPalette/ToolPalette";

const App = ({onToolClick}) => {
	return (
		<div className="flex flex-col flex-grow">
			<h1 className="py-8 text-center">Dungeon Map</h1>
			<Map rows={10} columns={10} className="flex flex-grow flex-col justify-center" />
			<ToolPalette onToolClick={onToolClick} />
		</div>
	);
};

App.propTypes = {
	onToolClick: PropTypes.func
};

export default App;
