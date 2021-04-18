module.exports = {
  presets: [
    ["@babel/preset-react"],
    [
      "@babel/preset-env",
      {
        corejs: {
          version: 3
        },
        useBuiltIns: "usage"
      }
    ],
    ["@babel/preset-typescript"]
  ],
  plugins: []
};
