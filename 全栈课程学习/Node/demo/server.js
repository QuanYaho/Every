const http = require('http');

let server = http.createServer((request, response) => {
    // request  请求  接收的数据
    // response 响应  发送的数据  
    response.write('aaa')
    response.end()
})

// 监听
server.listen(8089)