const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    application: [
      "./src/index.ts"
    ]
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "source-map-loader",
        exclude: /node_modules/,
        enforce: "pre"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.template.html"
    })
  ]
};
