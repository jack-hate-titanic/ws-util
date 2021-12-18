/*
 * @Author: ws
 * @Date: 2021-12-15 22:43:23
 * @LastEditors: ws
 * @LastEditTime: 2021-12-15 23:17:19
 * @Description:
 */

const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

class MyPromise {
  constructor(execute) {
    this.status = PENDING;
    this.value = "";
    this.reason = "";
    this.onSuccessCb = [];
    this.onFailCb = [];
    const resolve = (value) => {
      console.log(this.status);
      if (this.status === PENDING) {
        this.status = SUCCESS;
        this.value = value;
        this.onSuccessCb.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = FAIL;
        this.reason = reason;
        this.onFailCb.forEach((fn) => fn(this.reason));
      }
    };
    execute(resolve, reject);
  }

  then(onSuccess, onFail) {
    // 每次新启动一个promise初始化都是pending状态，只有执行了resolve或者reject状态才会改变
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === SUCCESS) {
        onSuccess(this.value);
      }
      if (this.status === FAIL) {
        onFail(this.reason);
      }
      if (this.status === PENDING) {
        this.onSuccessCb.push(() => {
          let x = onSuccess(this.value);
          resolve(x);
        });
        this.onFailCb.push(onFail);
      }
    });
    return promise;
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("111");
  }, 2000);
});

const th = promise.then(
  (result) => {
    console.log(result);
    return result + 333;
  },
  (reason) => {
    console.log(reason);
  }
);

th.then((result) => {
  console.log(result);
});
