// 自己实现一个 Promise

// 构造函数的参数是一个异步任务
function Promise(task) {
    let that = this;
    that.status = 'pending' // 默认状态是pending

    that.value = undefined; //存放 promise 的结果

    that.onResolvedCallbacks = []   // 存放所有成功的回调函数
    that.onRejectedCallbacks = []   // 存放所有失败的回调函数

    function resolve(value) {
        if(that.status === 'pending') {
            that.status = 'fulfilled';
            that.value = value;
            that.onResolvedCallbacks.forEach(item => item(value));
        }
    }

    function reject(reason) {
        // 如果当前状态是初始态，则转成失败态
        if(that.status === 'pending') {
            that.status = 'rejected'
            that.value = reason;
            that.onRejectedCallbacks.forEach(item => item(reason));
        }
    }

    try {
        task(resolve, reject)
    } catch(e) {
        reject(e)
    }

}

    
    // onFulfilled成功的回调, onReject 失败的回调
    Promise.prototype.then = function(onFulfilled, onReject) {
        let that = this;
        that.onResolvedCallbacks.push(onFulfilled)
        that.onRejectedCallbacks.push(onReject)
    }

module.exports = Promise;