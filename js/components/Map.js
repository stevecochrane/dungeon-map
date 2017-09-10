import preact from "preact";

class Map extends preact.Component {
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
						return <tr></tr>;
					})}
				</tbody>
			</table>
		);
	}
};

export default Map;
