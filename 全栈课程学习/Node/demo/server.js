const http = require('http');

let server = http.createServer((request, response) => {
    // request  请求  接收的数据
    // response 响应  发送的数据  
    if(request.url === '/aaa') {
        response.write('aaa')
    }else{
        response.write('fdfdgfdgsfdg')
    }
    
    response.end()
})

// 监听
server.listen(8089)