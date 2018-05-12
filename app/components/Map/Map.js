import React from "react";
import PropTypes from "prop-types";

class Map extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(<div></div>);
		// return (
		// 	<table>
		// 		<tbody>
		// 			{this.state.data.map(function(tableRow) {
		// 				return (
		// 					<tr>
		// 						{tableRow.map(function() {
		// 							return (
		// 								<td></td>
		// 							);
		// 						})}
		// 					</tr>
		// 				);
		// 			})}
		// 		</tbody>
		// 	</table>
		// );
	}
}

Map.propTypes = {
	initialData: PropTypes.array
};

export default Map;
