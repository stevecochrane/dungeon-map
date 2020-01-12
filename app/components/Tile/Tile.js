import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Tile.css";

const Tile = ({ hasRightWall, hasBottomWall }) => {

	const [active, setActive] = useState(false);
	const [topWallActive, setTopWallActive] = useState(false);
	const [rightWallActive, setRightWallActive] = useState(false);
	const [bottomWallActive, setBottomWallActive] = useState(false);
	const [leftWallActive, setLeftWallActive] = useState(false);

	const toggleTile = () => {
		setActive(!active);
	};

	const toggleTopWall = () => {
		setTopWallActive(!topWallActive);
	};

	const toggleLeftWall = () => {
		setLeftWallActive(!leftWallActive);
	};

	const toggleRightWall = () => {
		setRightWallActive(!rightWallActive);
	};

	const toggleBottomWall = () => {
		setBottomWallActive(!bottomWallActive);
	};

	let tileClassName = "Tile";
	if (hasRightWall) {
		tileClassName += " Tile--withRightWall";
	}
	if (hasBottomWall) {
		tileClassName += " Tile--withBottomWall";
	}
	if (active) {
		tileClassName += " is-active";
	}

	let topWallClassName = "Tile-wall Tile-wall--top";
	if (topWallActive) {
		topWallClassName += " is-active";
	}

	let leftWallClassName = "Tile-wall Tile-wall--left";
	if (leftWallActive) {
		leftWallClassName += " is-active";
	}

	let rightWallClassName = "Tile-wall Tile-wall--right";
	if (rightWallActive) {
		rightWallClassName += " is-active";
	}

	let bottomWallClassName = "Tile-wall Tile-wall--bottom";
	if (bottomWallActive) {
		bottomWallClassName += " is-active";
	}

	return (
		<div className={tileClassName}>
			<div className={topWallClassName} onClick={() => { toggleTopWall(); }}></div>
			<div className={leftWallClassName} onClick={() => { toggleLeftWall(); }}></div>
			{hasRightWall &&
				<div className={rightWallClassName} onClick={() => { toggleRightWall(); }}></div>
			}
			{hasBottomWall &&
				<div className={bottomWallClassName} onClick={() => { toggleBottomWall(); }}></div>
			}
			<div className="Tile-surface" onClick={() => { toggleTile(); }}></div>
		</div>
	);
};

Tile.propTypes = {
	hasRightWall: PropTypes.bool,
	hasBottomWall: PropTypes.bool
};

Tile.defaultProps = {
	hasRightWall: false,
	hasBottomWall: false
};

export default Tile;
