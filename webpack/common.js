const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge             = require("webpack-merge");

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
  lintCSS({
    include: paths.app
  }),
  loadJS({
    include: paths.app
  })
]);
