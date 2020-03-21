const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ include, exclude, use }) => {
  const plugin = new MiniCssExtractPlugin({
    filename: "[name].[chunkhash].css"
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            MiniCssExtractPlugin.loader
          ].concat(use)
        }
      ]
    },
    plugins: [ plugin ]
  };
};
