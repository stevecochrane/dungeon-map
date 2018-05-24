import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";

class Map extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className={`Map ${this.props.className}`}>
				<div className="Map-row flex justify-center">
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
				<div className="Map-row flex justify-center">
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
	className: PropTypes.string,
	initialData: PropTypes.array
};

export default Map;
