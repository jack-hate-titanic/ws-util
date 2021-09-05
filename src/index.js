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
