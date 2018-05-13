const merge   = require("webpack-merge");
const webpack = require("webpack");

const autoprefix         = require("./parts/autoprefix");
const clean              = require("./parts/clean");
const commonConfig       = require("./common");
const extractCSS         = require("./parts/extractCSS");
const generateSourceMaps = require("./parts/generateSourceMaps");
const paths              = require("./parts/paths");

const productionConfig = merge([
	{
		mode: "production",
		output: {
			chunkFilename: "[name].[chunkhash].js",
			filename: "[name].[chunkhash].js"
		},
		performance: {
			hints: "warning",
			maxEntrypointSize: 100000,
			maxAssetSize: 450000
		},
		plugins: [
			new webpack.HashedModuleIdsPlugin()
		]
	},
	clean(paths.build),
	generateSourceMaps({
		type: "source-map"
	}),
	extractCSS({
		use: [
			"css-loader",
			autoprefix()
		]
	})
]);

module.exports = merge(commonConfig, productionConfig);
