import React from "react";

class Tile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};
	}
	render() {
		return(
			<div
				className={this.state.isActive ? "is-active" : ""}
				onClick={() => { this._toggleTile(); }}>
				Tile
			</div>
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
