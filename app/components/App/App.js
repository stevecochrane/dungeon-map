import React from "react";

import Map from "../Map/Map";

class App extends React.Component {
	render() {
		return (
			<div className="flex flex-col flex-grow">
				<h1 className="py-8 text-center">Dungeon Map</h1>
				<Map className="flex flex-grow flex-col justify-center" />
			</div>
		);
	}
}

export default App;
