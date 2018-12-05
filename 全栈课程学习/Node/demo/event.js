const Event = require('events').EventEmitter;

let ev = new Event()

// 1.监听（接收）
ev.on('msg', function(a,b,c){
    console.log(a, b, c)
})

// 2.派发（发送）
ev.emit('msg',5,5345,656)


// event 跟函数调用区别是：可以解耦合