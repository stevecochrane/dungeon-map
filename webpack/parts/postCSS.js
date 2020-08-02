const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");

module.exports = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [tailwindcss(), postcssPresetEnv()]
  }
});
