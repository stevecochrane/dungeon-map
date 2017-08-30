import { h, Component } from "preact";

export default class EditableTextField extends Component {
	_showEditor() {
		console.log("hi");
	}
	render() {
		return (
			<div>
				<h1>And this is the EditableTextField component.</h1>
				<h1 onClick={this._showEditor}>This is an editable text field. Click on me to edit!</h1>
			</div>
		);
	}
};
