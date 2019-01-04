> Promise 是一个类， 可以创建实例
> 代表承诺


## .then() 方法

> 一个Promise必须提供一个then方法来获取其值或原因
> Promise的then方法接受两个参数

```
Promise.then(onFulfilled, onRejected) 
```

1. onFulfilled 和 onRejected 都是可选参数：
   1. 如果 onFulfilled 不是一个函数，则忽略之
   2. 如果 onRejected 不是一个函数，则忽略之
2. 如果 onFulfilled 是一个函数：
   1. 它必须在 `promise` fulfilled 后调用，且 `promise` 的 value 为其第一个参数
   2. 它不能在 `promise` fulfilled 前调用
   3. 不能被多次调用
3. 如果 onRejected 是一个函数：



```
let p1 = new Promise(function(resolve, reject) {
    // ---> pending
    setTimeout(function() {
        let num = Math.random();
        if(num > 0.5) {
            // ---> fulfilled
            // 如果这个promise成功了，会调用成功的回调
            resolve('成功') 
        }else{
            // ---> rejected
            // 如果这个promise失败了，会调用失败的回调
            reject('失败')
        }
    }, 1000)
})

p1.then(function(value) {
    // 如果promise调用resolve(),就走这一步
    console.log(value)
}, function(reason) {
    console.log(reason)
})

```

## Promise原理
```
let Promise = require('./Promise')

```