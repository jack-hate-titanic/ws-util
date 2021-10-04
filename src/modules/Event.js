/*
 * @Author: ws
 * @Date: 2021-10-04 17:42:18
 * @LastEditors: ws
 * @LastEditTime: 2021-10-04 17:50:17
 * @Description:
 */

const Event = (function () {
  const _funMap = {};
  return {
    on: (type, callback) => {
      if (_funMap[type]) {
        if (!_funMap[type].includes[callback]) {
          _funMap[type].push(callback);
        }
      } else {
        _funMap[type] = [callback];
      }
    },
    emit: (type, ...payload) => {
      if (!_funMap[type]) return;
      _funMap[type].forEach((fn) => fn(payload));
    },
  };
})();
