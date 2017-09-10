import preact from "preact";

export default class EditableTextField extends preact.Component {
	constructor() {
		super();
	}
	componentWillMount() {
		this.setState({
			isEditing: true
		});
	}
	render() {
		return (
			<h1 onClick={this._showEditor.bind(this)}>This is an editable text field. Click on me to edit!</h1>
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
};