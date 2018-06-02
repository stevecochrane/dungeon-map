import React from "react";
import PropTypes from "prop-types";

import "./Tile.css";

export default class Tile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};
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

		return(
			<div
				className={className}
				onClick={() => { this._toggleTile(); }}
			>
				<div className="Tile-wall Tile-wall--top"></div>
				<div className="Tile-wall Tile-wall--left"></div>
				{this.props.hasRightWall &&
					<div className="Tile-wall Tile-wall--right"></div>
				}
				{this.props.hasBottomWall &&
					<div className="Tile-wall Tile-wall--bottom"></div>
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
}

Tile.propTypes = {
	hasRightWall: PropTypes.bool,
	hasBottomWall: PropTypes.bool
};

Tile.defaultProps = {
	hasRightWall: false,
	hasBottomWall: false
};
