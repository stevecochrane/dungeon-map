const merge   = require("webpack-merge");
const webpack = require("webpack");

const postCSS            = require("./parts/postCSS");
const clean              = require("./parts/clean");
const commonConfig       = require("./common");
const extractCSS         = require("./parts/extractCSS");
const generateSourceMaps = require("./parts/generateSourceMaps");
const minifyCSS          = require("./parts/minifyCSS");
const minifyJS           = require("./parts/minifyJS");
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
  minifyJS(),
  minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  }),
  generateSourceMaps({
    type: "source-map"
  }),
  extractCSS({
    use: [
      "css-loader",
      postCSS()
    ]
  })
]);

module.exports = merge(commonConfig, productionConfig);
