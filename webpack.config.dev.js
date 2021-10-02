/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    historyApiFallback: true,
    port: 3000
  }
});
