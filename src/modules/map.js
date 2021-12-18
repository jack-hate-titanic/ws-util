/*
 * @Author: ws
 * @Date: 2021-12-18 22:10:22
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 22:18:22
 * @Description:
 */
Array.prototype.myMap = function (fn, context) {
  var arr = Array.prototype.slice.call(this);
  var mappedArr = [];
  for (var i = 0; i < arr.length; i++) {
    mappedArr.push(fn.call(context, arr[i], i, this));
  }
  return mappedArr;
};

const arr = [1, 2, 3];
const arr1 = arr.myMap((item) => {
  return item + 1;
});

console.log(arr1);
