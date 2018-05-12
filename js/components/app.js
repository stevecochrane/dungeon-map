import React from "react";
import EditableTextField from "./EditableTextField";
import Map from "./Map";

var mapData = [
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ]
];

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>DUNGEON MAP</h1>
				<EditableTextField />
				<Map initialData={mapData} />
			</div>
		);
	}
}

export default App;
