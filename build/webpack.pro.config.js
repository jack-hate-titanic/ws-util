/*
 * @Author: ws
 * @Date: 2021-09-05 09:47:35
 * @LastEditors: ws
 * @LastEditTime: 2021-09-05 18:11:19
 * @Description:
 */
const path = require("path");
const webpack = require("webpack");
const { name } = require("../package.json");

const rootPath = path.resolve(__dirname, "../");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: `${name}.min.js`,
    path: path.resolve(rootPath, "dist"),
    library: name,
    // 打包生成库可以通过esm/commonjs/reqire的语法引入
    libraryTarget: "umd",
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
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // # 启用作用域提升，作用是让代码文件更小、运行的更快
  ],
};
