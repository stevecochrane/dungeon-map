import preact from "preact";
import "preact/devtools";

import App from "./components/App";

document.addEventListener("DOMContentLoaded", function(event) {
	preact.render(<App />, document.getElementById("root"));
});
