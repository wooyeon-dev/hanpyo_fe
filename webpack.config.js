/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[contenthash].js",
    clean: true
  },
  devtool: "eval",
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src")
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
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { modules: true } }, "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            publicPath: "/",
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
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new ForkTsCheckerWebpackPlugin()
  ]
};
