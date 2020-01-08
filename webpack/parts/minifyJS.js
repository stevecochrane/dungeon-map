const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = () => ({
	optimization: {
		minimizer: [new TerserWebpackPlugin({ sourceMap: true })]
	}
});
