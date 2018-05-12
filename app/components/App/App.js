import React from "react";

import EditableTextField from "../EditableTextField/EditableTextField";
import Map from "../Map/Map";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>DUNGEON MAP</h1>
				<EditableTextField />
				<Map />
			</div>
		);
	}
}

export default App;
