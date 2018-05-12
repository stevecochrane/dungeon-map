import React from "react";

class EditableTextField extends React.Component {
	constructor(props) {
		super(props);

		this._showEditor = this._showEditor.bind(this);

		this.state = {
			isEditing: true
		};
	}
	render() {
		return (
			<h1 onClick={this._showEditor}>This is an editable text field. Click on me to edit!</h1>
		);
	}
	_showEditor() {
		if (this.state.isEditing) {
			this.setState({
				isEditing: false
			});
		} else {
			this.setState({
				isEditing: true
			});
		}
	}
}

export default EditableTextField;
