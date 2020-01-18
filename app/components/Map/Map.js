import React, { useState } from "react";
import PropTypes from "prop-types";
import Tile from "../Tile/Tile";

const Map = ({ className, columns, rows }) => {

	let initialMapData = [];
	for (let row = 0; row < rows; row++) {
		initialMapData[row] = [];
		for (let column = 0; column < columns; column++) {
			initialMapData[row][column] = 0;
		}
	}

	const [mapData] = useState(initialMapData);

	return (
		<div className={`Map ${className}`}>
			{mapData.map((row, rowIndex) => {
				return (
					<div key={rowIndex} className="Map-row flex justify-center">
						{row.map((column, columnIndex) => {
							let tileProps = {};
							if (rowIndex === rows - 1) {
								tileProps.hasBottomWall = true;
							}
							if (columnIndex === columns - 1) {
								tileProps.hasRightWall = true;
							}
							return (
								<Tile key={columnIndex} {...tileProps} />
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

Map.propTypes = {
	className: PropTypes.string,
	columns: PropTypes.number,
	rows: PropTypes.number
};

export default Map;
