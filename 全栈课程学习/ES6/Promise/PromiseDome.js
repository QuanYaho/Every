let Promise22 = require("./Promise")

let p1 = new Promise22(function(resolve, reject) {
    // ---> pending
    setTimeout(function() {
        // throw Error('出异常了')
        let num = Math.random();
        console.log(num)
        if(num > 0.5) {
            // ---> fulfilled
            // 如果这个promise成功了，会调用成功的回调
            resolve('成功222') 
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