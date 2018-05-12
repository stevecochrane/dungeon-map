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
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							plugins: () => ([
								require("autoprefixer")
							])
						}
					}
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: "pre",
				loader: "eslint-loader",
				options: {
					emitWarning: true
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					cacheDirectory: true
				}
			}
		]
	}
};
