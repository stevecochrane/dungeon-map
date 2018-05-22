import React from "react";

import Map from "../Map/Map";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1 className="text-center">Dungeon Map</h1>
				<Map />
			</div>
		);
	}
}

export default App;
