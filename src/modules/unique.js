/*
 * @Author: ws
 * @Date: 2022-04-24 22:12:59
 * @LastEditors: ws
 * @LastEditTime: 2022-04-24 22:45:58
 * @Description: 
 */

var resources = [
  { name: "张三", age: "18" },
  { name: "张三", age: "19" },
  { name: "张三", age: "20" },
  { name: "李四", age: "19" },
  { name: "王五", age: "20" },
  { name: "赵六", age: "21" }
]



function unique(arr) {
  var temp = {};
  let newArr = arr.reduce((pre, cur) => {
    console.log(cur,'cur');
    // 初始化都为undefined
    if (!temp[cur.name]) {
      temp[cur.name] = true;
      pre.push(cur);
    }
    // 一定要记得map，filter，reduce都需要返回的
    return pre;
  }, [])
  return newArr;
}

console.log(unique(resources));



