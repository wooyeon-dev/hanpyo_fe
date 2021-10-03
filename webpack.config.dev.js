/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: { localIdentName: "[path][name]__[local]_[hash:base64:5]" } } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  }
});
