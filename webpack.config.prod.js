/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { modules: true } }, "sass-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })]
});
