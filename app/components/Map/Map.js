import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";

class Map extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="Map">
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
			</div>
		);
	}
}

Map.propTypes = {
	initialData: PropTypes.array
};

export default Map;
