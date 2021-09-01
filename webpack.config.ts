import path from "path";
import webpack from "webpack";

import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HTMLInlineCSSWebpackPlugin from "html-inline-css-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "./src/**/*.{js,jsx,ts,tsx}",
      }
    }),
    new MiniCSSExtractPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/templates/index.html"
    }),
    new HTMLInlineCSSWebpackPlugin()
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()]
  },
  output: {
    clean: true,
    filename: "main.js",
    path: path.resolve(process.cwd(), "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"]
  }
};

export default config;
