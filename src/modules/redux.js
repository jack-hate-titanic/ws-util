/*
 * @Author: ws
 * @Date: 2023-01-08 11:29:22
 * @LastEditors: ws
 * @LastEditTime: 2023-01-08 12:17:18
 * @Description: 
 */

function createStore(reducer, initialState) {
   // 闭包存储状态
  let state = initialState;
  // 初始化订阅者数组
  const listeners = [];
  function getState() {
    return state;
  }

  function subscribe(func) {
    // 存储订阅者函数  
    listeners.push(func);
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => {
      listener();
    })
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}
