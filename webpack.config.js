const path = require("path");

module.exports = {
	entry: "./js/index.js",
	output: {
		filename: "chunk.js",
		path: path.join(__dirname, "/public/js")
	}
};
