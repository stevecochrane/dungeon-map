const UglifyJSWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = () => ({
	optimization: {
		minimizer: [new UglifyJSWebpackPlugin({ sourceMap: true })]
	}
});
