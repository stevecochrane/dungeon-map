import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";
import "./Map.css";

class Map extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="Map">
				<div className="Map-row">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="Map-row">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
			</div>
		);
	}
}

Map.propTypes = {
	initialData: PropTypes.array
};

export default Map;
