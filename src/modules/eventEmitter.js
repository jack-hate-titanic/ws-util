/*
 * @Author: ws
 * @Date: 2022-04-23 13:09:51
 * @LastEditors: ws
 * @LastEditTime: 2022-04-23 20:09:53
 * @Description: 
 */
class EventEmitter{
  constructor() {
    // 存储事件的数据结构，为了方便查找，使用对象(字典)
    this._cache = {};
  }

  // 绑定
  on(eventName, callback) {
    // 将同一类型事件放到一个数组中
    // 如果eventName存在
    let fns = this._cache[eventName];
    if (fns && Array.isArray(fns)) {
      if (!fns.includes[callback]) {
        fns.push(callback);
      } 
    }else {
      fns = [callback];
    }
    this._cache[eventName] = fns;
    // 支持链式调用
    return this;
  }

  emit(eventName, data) {
    let fns = this._cache[eventName];
    if (Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(data);
      })
    }
    return this;
  }

  // 解绑
  off(eventName, callback) {
    // 解绑如果传入callback，那就是解绑eventName的callback方法;如果不传callback，那就是解绑eventName的全部方法
    let fns = this._cache[eventName];
    if (Array.isArray(fns)) {
      if (callback) {
        let index = fns.indexOf(callback)
        if (index !== -1) {
          fns.splice(index, 1);
        }
      } else {
        fns.length = 0;
      }
     
    }
    
    return this;
  }

}


const event1 = new EventEmitter();
event1.on('input', function input(data) {
  console.log('输入'+data);
});

event1.on('output', function output(data) {
  console.log('输出'+data);
});

console.log(event1);

event1.emit('input', 1)
event1.emit('output',2)

