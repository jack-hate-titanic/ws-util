/*
 * @Author: ws
 * @Date: 2022-03-13 18:09:41
 * @LastEditors: ws
 * @LastEditTime: 2022-03-13 18:18:34
 * @Description: 
 */

setTimeout(function fn() {
  console.log('我被调用了');
  setTimeout(fn, 1000);
},1000)