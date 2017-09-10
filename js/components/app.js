import preact from "preact";
import EditableTextField from "./EditableTextField";

export default class App extends preact.Component {
	render() {
		return (
			<div class="app">
				<h1>Hello! This is the App component.</h1>
				<EditableTextField />
			</div>
		)
	}
};
