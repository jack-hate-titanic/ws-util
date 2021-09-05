/*
 * @Author: ws
 * @Date: 2021-09-05 11:13:09
 * @LastEditors: ws
 * @LastEditTime: 2021-09-05 18:10:53
 * @Description:
 */
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "ws-util.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
