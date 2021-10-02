/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map"
});
