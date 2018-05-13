const merge = require("webpack-merge");

const lintCSS = require("./parts/lintCSS");
const lintJS  = require("./parts/lintJS");
const loadCSS = require("./parts/loadCSS");
const loadJS  = require("./parts/loadJS");
const paths   = require("./parts/paths");

module.exports = merge([
	{
		entry: {
			app: paths.app
		},
		output: {
			path:     paths.build,
			filename: "[name].js"
		}
	},
	lintJS({
		include: paths.app
	}),
	lintCSS({
		include: paths.app
	}),
	loadJS({
		include: paths.app
	})
]);
