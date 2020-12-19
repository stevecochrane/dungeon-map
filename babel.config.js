module.exports = {
  presets: [
    ["@babel/preset-react"],
    [
      "@babel/preset-env",
      {
        corejs: {
          proposals: true,
          version: 3
        },
        useBuiltIns: "usage"
      }
    ]
  ],
  plugins: ["babel-plugin-macros"]
};
