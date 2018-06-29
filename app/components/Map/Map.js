import React, { Component } from "react";
import PropTypes from "prop-types";
import Tile from "../Tile/Tile";

class Map extends Component {
	constructor(props) {
		super(props);

		let initialData = [];
		for (let row = 0; row < this.props.rows; row++) {
			initialData[row] = [];
			for (let column = 0; column < this.props.columns; column++) {
				initialData[row][column] = 0;
			}
		}

		this.state = {
			data: initialData
		};
	}
	render() {
		//	TODO: Don't use indexes as key values
		return(
			<div className={`Map ${this.props.className}`}>
				{this.state.data.map((row, rowIndex) => {
					return(
						<div key={rowIndex} className="Map-row flex justify-center">
							{row.map((column, columnIndex) => {
								let tileProps = {};
								if (rowIndex === this.props.rows - 1) {
									tileProps.hasBottomWall = true;
								}
								if (columnIndex === this.props.columns - 1) {
									tileProps.hasRightWall = true;
								}
								return(
									<Tile key={columnIndex} {...tileProps} />
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}

Map.propTypes = {
	className: PropTypes.string,
	columns: PropTypes.number,
	rows: PropTypes.number
};

export default Map;
