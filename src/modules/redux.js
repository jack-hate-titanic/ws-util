/*
 * @Author: ws
 * @Date: 2023-01-08 11:29:22
 * @LastEditors: ws
 * @LastEditTime: 2023-01-12 22:04:56
 * @Description: 
 */
// 组合，是用来支持执行多个中间件的
function compose(func) {
  if (func.length === 1) {
    return func[0];
  }
  return func.reduce((a, b) => {
    return (...args) => b(a(...args));
  })
}

function applyMiddleware(...middlewares) {
  // applyMiddleware 的返回值应该是一个enhancer
  // 按照我们前面说的enhancer的参数是createStore
  function enhancer(createStore) {
    // enhancer应该返回一个新的createStore
    function newCreateStore(reducer) {
      // 我们先写个空的newCreateStore, 直接返回createStore的结果
      const store = createStore(reducer);
      // 因为我们只要是传入dispatch的，所以这边先展开middleware
      const chain = middlewares.map((middleware) => middleware(store));
      // 获取老的dispatch
      const { dispatch } = store;
      // 使用compose合并并执行中间件
      const enhanceDispatch = compose(chain);
      const newDispatch = enhanceDispatch(dispatch);
      // 用新的dispatch，替换老的dispatch
      return { ...store, dispatch: newDispatch };
    }
    return newCreateStore;
  }
  return enhancer;
}

function createStore(reducer, enhancer) {
  // 先处理enhancer
  // 如果enhancer存在并且是函数
  // 我们将createStore作为参数传给他
  // 他应该范湖已一个新的createStore给我
  // 我再拿这个新的createStore执行，应该得到一个store
  // 直接返回这个store就行
  // 增强器  装饰器
  if (enhancer && typeof enhancer === 'function') {
    const newCreateStore = enhancer(createStore);
    const newStore = newCreateStore(reducer);
    return newStore;
  }

  // 闭包存储状态
  let state;
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
    return state;
  }

  // 如果没有enhancer或者enhancer不是函数，直接执行之前的逻辑
  // 下面这些代码都是之前那版
  // 省略n行代码

  const store = {
    getState,
    subscribe,
    dispatch
  }

  return store;
}
