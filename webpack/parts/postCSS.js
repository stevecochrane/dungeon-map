const postcssPresetEnv = require("postcss-preset-env");
const postcssPurgeCss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");

module.exports = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [
      tailwindcss(),
      postcssPresetEnv(),
      postcssPurgeCss({
        content: ["./app/templates/**/*.html", "./app/components/**/*.js"],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  }
});
