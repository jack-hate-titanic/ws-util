/*
 * @Author: ws
 * @Date: 2021-10-04 19:31:27
 * @LastEditors: ws
 * @LastEditTime: 2021-12-15 23:00:58
 * @Description:
 *1.Promise是一个类 我们可以new Promise 创造一个实例
 2.promise 有三个状态 1.默认状态叫等待态 pending 2.resolve表示成功态 fulfilled 3.reject表示变成失败态 rejected
 3.只有在pending的状态的时候才能改变状态，  不能从成功变成失败 ， 不能从失败变成成功
 4..promise对象接受一个函数作为参数，该函数接受两个函数，分别是成功的回调和失败的回调
 5.then的参数是两个函数，是个是onFulfilled函数，一个是onRejected函数
 */

/**
 * 0.promise: 一个拥有符合这个规范的行为的then方法的对象或函数。
 * 1.一个promise的当前状态只能是pending、fulfilled和rejected三种之一。状态改变只能是pending到fulfilled或者pending到rejected。状态改变不可逆。
 * 2.Promise的then方法接受俩个参数来访问当前或最终的值或原因。这两个参数都必须是函数。
 * 3.then必须返回一个promise
 */
const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

const resolvePromise = (x, promise, resolve, reject) => {
  if (x == promise) {
    reject(new TypeError("错误，循环引用"));
  }
};

class Promise {
  constructor(execute) {
    this.status = PENDING;
    this.value = undefined;
    this.error = undefined;
    this.successCallBackArr = [];
    this.failCallBackArr = [];
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = SUCCESS;
        this.successCallBackArr.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.error = reason;
        this.status = FAIL;
        this.failCallBackArr.forEach((fn) => fn());
      }
    };
    try {
      execute(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onSuccess, onFail) {
    const promise = new Promise((resolve, reject) => {
      if (this.status === SUCCESS) {
        try {
          const x = onSuccess(this.value);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      }
      if (this.status === FAIL) {
        try {
          const x = onFail(this.error);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      }
      if (this.status === PENDING) {
        this.successCallBackArr.push(() => {
          try {
            const x = onSuccess(this.value);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
        this.failCallBackArr.push(() => {
          try {
            const x = onFail(this.reason);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return promise;
  }
}

let pro = new Promise((resolve) => {
  throw "错误";
});

pro
  .then(
    (value) => {
      return value + 3;
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then((value) => {
    console.log(value);
  });
