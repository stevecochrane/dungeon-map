const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");

module.exports = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [postcssImport(), tailwindcss(), postcssPresetEnv()]
  }
});
