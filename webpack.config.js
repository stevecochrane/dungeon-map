const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: ["ts-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintWebpackPlugin(),
    new MiniCSSExtractPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/templates/index.html"
    }),
    new HTMLInlineCSSWebpackPlugin()
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()]
  },
  output: {
    filename: "main.js",
    path: path.resolve(process.cwd(), "dist")
  }
};
