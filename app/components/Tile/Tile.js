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

	let tileClassName = "Tile relative";
	if (hasRightWall) {
		tileClassName += " Tile--withRightWall";
	}
	if (hasBottomWall) {
		tileClassName += " Tile--withBottomWall";
	}

	const commonWallClasses = "Tile-wall absolute cursor-pointer transition-bg hover:transition-none";
	const commonActiveClasses = "bg-blue-600 z-30";
	const commonInactiveClasses = "bg-white hover:bg-gray-400 z-10 hover:z-20";

	let topWallClassName = `${commonWallClasses} Tile-wall--top h-1 top-0 left-0`;
	if (topWallActive) {
		topWallClassName = `${topWallClassName} ${commonActiveClasses}`;
	} else {
		topWallClassName = `${topWallClassName} ${commonInactiveClasses}`;
	}

	let leftWallClassName = `${commonWallClasses} Tile-wall--left w-1 top-0 left-0`;
	if (leftWallActive) {
		leftWallClassName = `${leftWallClassName} ${commonActiveClasses}`;
	} else {
		leftWallClassName = `${leftWallClassName} ${commonInactiveClasses}`;
	}

	let rightWallClassName = `${commonWallClasses} Tile-wall--right w-1 top-0 right-0`;
	if (rightWallActive) {
		rightWallClassName = `${rightWallClassName} ${commonActiveClasses}`;
	} else {
		rightWallClassName = `${rightWallClassName} ${commonInactiveClasses}`;
	}

	let bottomWallClassName = `${commonWallClasses} Tile-wall--bottom h-1 bottom-0 left-0`;
	if (bottomWallActive) {
		bottomWallClassName = `${bottomWallClassName} ${commonActiveClasses}`;
	} else {
		bottomWallClassName = `${bottomWallClassName} ${commonInactiveClasses}`;
	}

	let tileSurfaceClassName = "Tile-surface absolute inset-0 cursor-pointer transition-bg hover:transition-none";
	if (active) {
		tileSurfaceClassName = `${tileSurfaceClassName} bg-blue-400`;
	} else {
		tileSurfaceClassName = `${tileSurfaceClassName} bg-gray-200 hover:bg-gray-400`;
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
			<div className={tileSurfaceClassName} onClick={() => { toggleTile(); }}></div>
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
