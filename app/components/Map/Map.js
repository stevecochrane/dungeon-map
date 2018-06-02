import React from "react";
import PropTypes from "prop-types";

import Tile from "../Tile/Tile";

export default class Map extends React.Component {
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
				{this.state.data.map(function(row, rowIndex) {
					return(
						<div key={rowIndex} className="Map-row flex justify-center">
							{row.map(function(column, columnIndex) {
								return(
									<Tile key={columnIndex}  />
								);
							}, this)}
						</div>
					);
				}, this)}
			</div>
		);
	}
}

Map.propTypes = {
	className: PropTypes.string,
	columns: PropTypes.number,
	rows: PropTypes.number
};
