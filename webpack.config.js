const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const FontminPlugin = require("fontmin-webpack");
const NukeCssPlugin = require("nukecss-webpack");
const path = require("path");

module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "App.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".png", ".jpg"],
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          ie8: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          drop_console: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|gif|jpg|jpeg|ttf|woff|woff2|otf)$/,
        use: "file-loader",
      },
      {
        test: /\loader.(svg)$/,
        use: "file-loader?name=./images/[name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
    new NukeCssPlugin(),
    new FontminPlugin({
      autodetect: true,
      glyphs: ["\uf0c8"],
    }),
  ],
};
