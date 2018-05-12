import React from "react";

import "./Tile.css";

class Tile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};
	}
	render() {
		let className = "Tile";
		if (this.state.isActive) {
			className += " is-active";
		}

		return(
			<div
				className={className}
				onClick={() => { this._toggleTile(); }}
			></div>
		);
	}
	_toggleTile() {
		let toggled = !this.state.isActive;
		this.setState({
			isActive: toggled
		});
	}
}

export default Tile;
