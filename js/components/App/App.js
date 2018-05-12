import React from "react";

import EditableTextField from "../EditableTextField/EditableTextField";
import Tile from "../Tile/Tile";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>DUNGEON MAP</h1>
				<EditableTextField />
				<Tile />
			</div>
		);
	}
}

export default App;
