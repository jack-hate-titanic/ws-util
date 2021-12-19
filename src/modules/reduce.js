/*
 * @Author: ws
 * @Date: 2021-12-18 22:23:49
 * @LastEditors: ws
 * @LastEditTime: 2021-12-18 22:39:25
 * @Description:
 */

Array.prototype.myReduce = function (fn, init) {
  const arr = Array.prototype.slice.call(this);
  let res, startIndex;
  res = init ? init : arr[0];
  startIndex = init ? 0 : 1;
  for (var i = startIndex; i < arr.length; i++) {
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};

const arr = [1, 2, 3];

const newArr = arr.myReduce((init, item) => {
  return init + item;
});
console.log(newArr);
