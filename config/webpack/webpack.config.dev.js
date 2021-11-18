const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = (env) => {
  return merge(common(env), {
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
            { loader: "css-loader", options: { modules: { localIdentName: "[local]__[hash:base64:5]" } } },
            { loader: "sass-loader", options: { sourceMap: true } }
          ]
        }
      ]
    }
  });
};
