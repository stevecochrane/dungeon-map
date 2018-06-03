import React from "react";
import PropTypes from "prop-types";

import "./Tile.css";

export default class Tile extends React.Component {

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
		let className = "Tile";
		if (this.props.hasRightWall) {
			className += " is-hasRightWall";
		}
		if (this.props.hasBottomWall) {
			className += " is-hasBottomWall";
		}
		if (this.state.isActive) {
			className += " is-active";
		}
		if (this.state.isTopWallActive) {
			className += " is-topWallActive";
		}
		if (this.state.isLeftWallActive) {
			className += " is-leftWallActive";
		}
		if (this.state.isRightWallActive) {
			className += " is-rightWallActive";
		}
		if (this.state.isBottomWallActive) {
			className += " is-bottomWallActive";
		}

		return(
			<div className={className} onClick={() => { this._toggleTile(); }}>
				<div className="Tile-wall Tile-wall--top" onClick={() => { this._toggleTopWall(); }}></div>
				<div className="Tile-wall Tile-wall--left" onClick={() => { this._toggleLeftWall(); }}></div>
				{this.props.hasRightWall &&
					<div className="Tile-wall Tile-wall--right" onClick={() => { this._toggleRightWall(); }}></div>
				}
				{this.props.hasBottomWall &&
					<div className="Tile-wall Tile-wall--bottom" onClick={() => { this._toggleBottomWall(); }}></div>
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
