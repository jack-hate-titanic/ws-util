/*
 * @Author: ws
 * @Date: 2022-04-23 11:23:44
 * @LastEditors: ws
 * @LastEditTime: 2022-04-23 13:06:12
 * @Description: 
 */
let data = { name: 'my name', age: 12 };
observe(data);
function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach((key) => {
    dataChange(data,key,data[key]);
  })
}

function dataChange(data, key, value) {
  observe(value);
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return value;
    },
    set: function (newValue) {
      console.log('data发生了变化', newValue);
      value = newValue;
    }
  })
}

console.log(data.name);
data.name = 13;
console.log(data.name);