const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const lintJS = require("./parts/lintJS");
const loadJS = require("./parts/loadJS");
const paths = require("./parts/paths");

module.exports = merge([
  {
    entry: {
      app: paths.app
    },
    output: {
      path: paths.build,
      filename: "[name].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: "app/templates/index.html"
      })
    ]
  },
  lintJS({
    include: paths.app
  }),
  loadJS({
    include: paths.app
  })
]);
