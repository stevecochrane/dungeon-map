const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./app/templates/index.html"
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public")
  }
};
