import { h, render } from "preact";
import App from "./components/App";

document.addEventListener("DOMContentLoaded", function(event) {
	render(<App />, document.getElementById("root"));
});
