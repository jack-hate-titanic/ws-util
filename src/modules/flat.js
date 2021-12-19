/*
 * @Author: ws
 * @Date: 2021-12-18 22:44:20
 * @LastEditors: ws
 * @LastEditTime: 2021-12-19 11:13:56
 * @Description:
 */
Array.prototype.myFlat = function () {
  const arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let result = arr[i].myFlat();
      res = [...res, ...result];
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

const arr = [1, 2, 3, [4, [5, 6, [7, 8]]]];
const newArr = arr.myFlat();
console.log(newArr);
