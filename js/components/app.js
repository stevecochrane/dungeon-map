import { h, Component } from "preact";
import EditableTextField from "./EditableTextField";

export default class App extends Component {
	render() {
		return (
			<div class="app">
				<h1>Hello! This is the App component.</h1>
				<EditableTextField />
			</div>
		)
	}
};
