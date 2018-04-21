import React from "react";

class Map extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: props.initialData
		}
	}
	render() {
		return (
			<table>
				<tbody>
					{this.state.data.map(function(tableRow, rowIndex) {
						return (
							<tr>
								{tableRow.map(function(tableCell, cellIndex) {
									return (
										<td></td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
};

export default Map;
