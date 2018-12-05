> Node: 中间层
- web后台（小规模）
- 工具

- node.js和JS一样单线程、单进程

- 非阻塞的异步交互
  

- 安全性、性能、前台交互

- 负载均衡


<hr/>

- 系统模块
- 服务器完成 —— http、fs、流操作
- WebSocket —— socket.io
  

<hr/>

#### 模块讲解

- assert
  
  ```
  const assert = require('assert');

  // 参数1：条件 参数2：一段话 

  function sum(a, b) {
    assert(arguments.length == 2, "params2")
    return a+b
  }

  sum(8, 7)
  ```



- JS-单进程、单线程  
  
-  如何多进程？
    - Child Processes
    - Cluster
    - Process 
  
- Crypto  签名
  
- OS  操作系统信息
- Path 处理路径
    - dirname   目录
    - basename  文件名
    - extname   扩展名
    - path.parse()


<hr/>

- 如何理解线程和进程
  - 1. 进程
  - 2. 线程
  
> 进程拥有独立的执行空间、存储
> 同一进程内的所有线程共享一套空间、代码

- 多线程  
  - 成本高(慢)；安全(进程间隔离)；进程间通信麻烦
- 多线程  
  - 成本低(快)；不安全(线程要死一块死)；线程间通信容易


<hr/>

- Events 事件队列

<hr/>

- Query Strings   查询字符串

 > 解析 ？ 后面的部分 
  https://www.google.com.hk/search?q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8

  <hr/>

  - url
> 解析整个url


  <hr/>

 - 网络协议
    - TCP (稳定)    Net
    - UDP (快)      UDP/Datagram

  <hr/>
  - 域名解析
    - DNS
    - Domain


<hr/>

- 流操作 Stream
>（连续数据： 网络流、文件流、语音流）

<hr/>

- TLS / SSL
  加密、安全

<hr/>

- ZLIB 压缩