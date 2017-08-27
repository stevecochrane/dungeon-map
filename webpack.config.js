const path = require("path");

module.exports = {
	entry: "./js/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "/public/js")
	},
	module: {
		rules: [
			{
				test: /\.jsx?/i,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};
