## Set 

> 一个Set是一堆东西的集合，Set有点像数组，不过跟数组不一样的是， Set里面不能有重复的内容

```
var books = new Set();
books.add('js');
books.add('js'); // 添加重复元素集合的元素个数不会改变
books.add('html'); 
books.forEach(function(book) { // 循环集合
    console.log(book)
})

books.size  // 2,返回集合元素的个数
books.has('js') // true,判断集合中是否有此元素
books.delete('js')  // true,从集合中删除此元素
books.clear()  // 清空set

```

## Map 

> 可以使用Map来组织键值对的数据

```
var books = new Map();
books.set('js', {name: 'js'})  // 像map中添加元素
books.size  // 查看集合的元素
books.get('js')  // 通过key获取值
books.delete('js')  // 执行key删除元素
books.has('js') // 判断map中有没有key

books.forEach((value, key) => {
    // forEach可以迭代map
})

books.clear() //清空map
```