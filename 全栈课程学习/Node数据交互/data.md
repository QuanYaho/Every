### web 服务器
1. 返回文件
2. 数据交互 （GET、POST）
3. 数据库




<hr/>

- setHeader()
- writeHeader()
- write()

<hr/>

- url.parse()    解析的是整个url
- querystring.parse()  解析的是数据
 
 <hr/>

 ### 数据库
 #### SQL
- 关系型数据库 —— MySQL、Oracle
> 数据之间是有关系的
    - MySQL (性能、安全性高，免费； 容灾略差)
    - Oracle (付费，金融、医疗； 容灾特别强)


- 文件型数据库 —— salite
> 简单、小

- 文档型数据库 —— MongoDB
> 直接存储异构数据 —— 方便

 #### NoSQL
 > 没有复杂的关系，对性能有极高的要求

 - redis、memcahced、hypertable、bigtable
  
#### 数据仓库 —— 海量数据