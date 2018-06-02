import React from "react";

import Map from "../Map/Map";

export default class App extends React.Component {
	render() {
		return (
			<div className="flex flex-col flex-grow">
				<h1 className="py-8 text-center">Dungeon Map</h1>
				<Map rows={10} columns={10} className="flex flex-grow flex-col justify-center" />
			</div>
		);
	}
}
