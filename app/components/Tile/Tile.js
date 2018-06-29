import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Tile.css";

class Tile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isActive: false,
			isTopWallActive: false,
			isLeftWallActive: false
		};

		if (this.props.hasRightWall) {
			this.state.isRightWallActive = false;
		}
		if (this.props.hasBottomWall) {
			this.state.isBottomWallActive = false;
		}
	}

	render() {
		let tileClassName = "Tile";
		if (this.props.hasRightWall) {
			tileClassName += " is-hasRightWall";
		}
		if (this.props.hasBottomWall) {
			tileClassName += " is-hasBottomWall";
		}
		if (this.state.isActive) {
			tileClassName += " is-active";
		}

		let topWallClassName = "Tile-wall Tile-wall--top";
		if (this.state.isTopWallActive) {
			topWallClassName += " is-active";
		}

		let leftWallClassName = "Tile-wall Tile-wall--left";
		if (this.state.isLeftWallActive) {
			leftWallClassName += " is-active";
		}

		let rightWallClassName = "Tile-wall Tile-wall--right";
		if (this.state.isRightWallActive) {
			rightWallClassName += " is-active";
		}

		let bottomWallClassName = "Tile-wall Tile-wall--bottom";
		if (this.state.isBottomWallActive) {
			bottomWallClassName += " is-active";
		}

		return(
			<div className={tileClassName} onClick={() => { this._toggleTile(); }}>
				<div className={topWallClassName} onClick={() => { this._toggleTopWall(); }}></div>
				<div className={leftWallClassName} onClick={() => { this._toggleLeftWall(); }}></div>
				{this.props.hasRightWall &&
					<div className={rightWallClassName} onClick={() => { this._toggleRightWall(); }}></div>
				}
				{this.props.hasBottomWall &&
					<div className={bottomWallClassName} onClick={() => { this._toggleBottomWall(); }}></div>
				}
			</div>
		);
	}

	_toggleTile() {
		let toggled = !this.state.isActive;
		this.setState({
			isActive: toggled
		});
	}

	_toggleTopWall() {
		let toggled = !this.state.isTopWallActive;
		this.setState({
			isTopWallActive: toggled
		});
	}

	_toggleLeftWall() {
		let toggled = !this.state.isLeftWallActive;
		this.setState({
			isLeftWallActive: toggled
		});
	}

	_toggleRightWall() {
		let toggled = !this.state.isRightWallActive;
		this.setState({
			isRightWallActive: toggled
		});
	}

	_toggleBottomWall() {
		let toggled = !this.state.isBottomWallActive;
		this.setState({
			isBottomWallActive: toggled
		});
	}

}

Tile.propTypes = {
	hasRightWall: PropTypes.bool,
	hasBottomWall: PropTypes.bool
};

Tile.defaultProps = {
	hasRightWall: false,
	hasBottomWall: false
};

export default Tile;
