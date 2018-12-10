// 表单 get 提交

/*
const http = require('http')
const url = require('url')

let server = http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true)

    console.log(pathname, query)

    // pathname =>  /server3.js
    // query =>  { name: '2343', age: 'text' }

    res.end()
})

server.listen(8089)

*/

// 表单 POST 提交

const http = require('http')
const querystring = require('querystring')

let server = http.createServer((req, res) => {
    let str = ''
    req.on('data', data => {
        str += data
    })

    req.on('end', () => {
        let post = querystring.parse(str)

        console.log(str, post)
        // name=quan&age=2222 
        // { name: 'quan', age: '2222' }
    })  // 结束

    res.end() 
})

server.listen(8089)