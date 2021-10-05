/*
 * @Author: ws
 * @Date: 2021-10-04 19:31:27
 * @LastEditors: ws
 * @LastEditTime: 2021-10-04 20:30:18
 * @Description:
 *1.Promise是一个类 我们可以new Promise 创造一个实例
 2.promise 有三个状态 1.默认状态叫等待态 pending 2.resolve表示成功态 fulfilled 3.reject表示变成失败态 rejected
 3.只有在pending的状态的时候才能改变状态，  不能从成功变成失败 ， 不能从失败变成成功
 4..promise对象接受一个函数作为参数，该函数接受两个函数，分别是成功的回调和失败的回调
 5.then的参数是两个函数，是个是onFulfilled函数，一个是onRejected函数
 */
const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";
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
    execute(resolve, reject);
  }

  then(onSuccess, onFail) {
    if (this.status === SUCCESS) {
      onSuccess(this.value);
    }
    if (this.status === FAIL) {
      onFail(this.reason);
    }
    if (this.status === PENDING) {
      this.successCallBackArr.push(() => {
        onSuccess(this.value);
      });
      this.failCallBackArr.push(() => {
        onFail(this.reason);
      });
    }
  }
}

let pro = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

pro.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
