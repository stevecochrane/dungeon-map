import React from "react";
import EditableTextField from "./EditableTextField";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>DUNGEON MAP</h1>
				<EditableTextField />
			</div>
		);
	}
}

export default App;
