/*
 * @Author: ws
 * @Date: 2021-09-05 10:58:19
 * @LastEditors: ws
 * @LastEditTime: 2021-09-05 18:31:55
 * @Description:
 */
let utils = {};
const modules = require.context("./modules/", true, /.js$/);
modules.keys().forEach((modulesKey) => {
  let attr = modulesKey
    .replace("./", "")
    .replace(".js", "")
    .replace("/index", "");
  utils[attr] = modules(modulesKey);
});
module.exports = utils;
