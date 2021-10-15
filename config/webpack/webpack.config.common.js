const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("../paths");

module.exports = {
  entry: [`${paths.src}/index.tsx`],
  output: {
    path: paths.buildPath,
    publicPath: paths.publicPath,
    filename: "[name].[contenthash].js",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
    alias: {
      "@": paths.src
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            publicPath: paths.publicPath,
            name: "[name].[ext]?[contenthash]",
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `${paths.templatePath}/index.html`
    })
  ]
};
