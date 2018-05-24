import React from "react";

import Map from "../Map/Map";

class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="py-8 text-center">Dungeon Map</h1>
				<Map />
			</div>
		);
	}
}

export default App;
