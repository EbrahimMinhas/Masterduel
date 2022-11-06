const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  }, mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      containers: path.resolve(__dirname, 'src/containers/'),
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    }
  },  devServer: {
    port: 3000,
    static: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader",
      ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"]
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    }),
  ],
};