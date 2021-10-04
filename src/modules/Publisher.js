/*
 * @Author: ws
 * @Date: 2021-10-04 17:29:20
 * @LastEditors: ws
 * @LastEditTime: 2021-10-04 19:31:13
 * @Description:发布订阅模式
 * Publisher:发布者
 * subsMap:存储订阅命令
 * subscribe：订阅者
 * notify：消息通知
 * type: 消息名称
 * 联想的时候一定要结合实例，比如京东订阅降价通知
 */

const Publisher = (function () {
  // 发布订阅者必须使用闭包，因为要进行缓存
  const _subsMap = {}; //存储订阅者
  return {
    // 消息订阅
    subscribe(type, cb) {
      if (_subsMap[type]) {
        if (!_subsMap[type].includes(cb)) {
          _subsMap[type].push(cb);
        }
      } else {
        _subsMap[type] = [cb];
      }
    },
    // 消息通知
    notify(type, ...payload) {
      if (!_subsMap[type]) return;
      _subsMap[type].forEach((cb) => cb(...payload));
    },
  };
})();
