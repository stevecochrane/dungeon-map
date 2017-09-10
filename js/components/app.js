import preact from "preact";
import EditableTextField from "./EditableTextField";
import Map from "./Map";

var mapData = [
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ]
];

class App extends preact.Component {
	render() {
		return (
			<div class="app">
				<h1>DUNGEON MAP</h1>
				<EditableTextField />
				<Map initialData={mapData} />
			</div>
		)
	}
};

export default App;
