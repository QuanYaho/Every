# ES6 新语法
## 1. 变量/赋值

var 可以重复定义、不能限制修改、没有块级作用域

let 不能重复定义  变量
const  常量


```
let a = 1;
let b = 2;
let c = 3;
let d = 4;

// 优化

let [a, b, c, d] = [1, 2, 3, 4]
```


解构对象
```
let { a, b, c}  = { a: "hahah", b:"4444", c:"gdsjg" }

console.log(a)    // hahah
console.log(b)    // 4444
console.log(c)    // gdsjg  
```


## 2. 函数
- 箭头函数
```
(参数，参数) => {
    函数体    
}

// 1. 有且只有一个参数,()可以省略
// 2. 返回值只有一个的时候，{}和return可以省略

***this、bind***

```


- 默认参数
```
function func(a, b=5, c=7) {
    // ...
}
```


- 参数展开
(剩余参数、数组展开)
```
function test(a, b, ...args) {
    // ...
}

// 注意： 在函数的参数里必须是最后一个位置的参数才能用 展开运算符
```

> 讲解"..."

 用途1:展开数组
 ```
 let arr = [1,43,56,23,54]
 ...arr  
 // 输出 1,43,56,23,54
 
 let arr2 = ["b", ...arr, "ds", "dcfrsd"]
 // ["b", 1, 43, 56, 23, 54, "ds", "dcfrsd"]
 ```

```
let arr = [1,2,3,4]
let arr2 = [21,22,23,24]
arr.push(...arr2)
```
## 3. 数组/json

1. 数组-5种
```
map
reduce
filter
forEach
```
- map 映射（一个对应一个）
> map生成一个新数组，不是在原数组修改，可以定义一个变量接收
```
let arr = [1,2,3,4,5]
let arr2 = arr.map((item) => {
    return item*2
})
```

- filter 过滤
> filter 也是生成一个新数组，不是在原数组修改，可以定义一个变量接收
```
let arr = [1, 23, 43, 5, 546, 66]
let arr2 = arr.filter(item => item > 10)
console.log(arr2) 
// [23, 43, 546, 66]
```

- forEach 遍历
> forEach不同于上面两个，它没有返回值。跟普通for循环一样

```
let arr = [12, 34, 4, 42, 48]
let sum = 0;
arr.forEach(item => {
    sum += item
})

console.log(sum)   // 140

```

- reduce 
> 汇总：一堆 --> 一个（比如算一个班的平均分，进去一堆人的分数，出来一个平均数）。 <br>
> reduce也不会改变原数组，做的跟map正好相反。
```
// 求数组的平均值
<!--注意：上面3个都有2个参数（item，index）-->
<!--reduce有3个参数（temp，item，index）,其中temp是第一次的临时变量-->
let arr = [12, 34, 4, 42, 48]
let sum = arr.reduce((temp, item, index)=>{
    return temp+item
})
console.log(sum/arr.length)   // 140/5
```

- from
> 将伪数组转化为可遍历的数组

```
let divs = document.querySelectAll('div')
Array.from(divs).forEach(item) {
    // ...
}
```

数组会修改原数组的方法： push pop unshift splice
2. json-2个变化


## 4. 字符串
- starsWith 
    - 以XXX开头
- endsWith
    - 以XXX结尾
> 判断是否以 .txt 结尾

## 5. 面向对象
> 掌握： class、constructor、extends、super、箭头函数、bind

```
// 传统构造函数
function Person(name, age) {
    this.age = age;
    this.name = name;
}

Person.prototype.showName = function() {
    alert(this.name)
}

let p = new Person('lisa',22)
```

```
// 传统继承
function Worker(name, age, job) {
    Person.call(this,name,age)
    this.job = job
}

Worker.prototype.constructor = Worker

Worker.prototype.showJob = function() {
    alert(this.job)
}

let w = new Worker('xiao',12)

w.showJob()
w.showName()
```

- ES6 面向对象
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showName() {
        alert(this.name)
    }
}

let p = new Person('soya',6)
p.showName()
```
- ES6继承
```
class Worker extends Person{
    constructor(name, age, job) {
        // super 超类（父类）
        super(name, age)
        this.job = job

        // extends会自动继承父类的方法，只写自身的即可
        showJob() {
            alert(this.job)
        }
    }
}

let w = new Worker('xiao',12)

w.showJob()
w.showName()

```
- 绑定this
  - bind  固定函数的this 
  - 箭头函数的this

> 普通函数： 根据调用我的人。谁调用，this指向谁<br>
> 箭头函数: 根据所在的环境
```
function show() {
    alert(this)
}

document.onclick = show.bind('aaa')  // 弹出的this就是 aaa
```

```
document.onclick = function () {
    let arr = [1, 2, 3]

    arr.a = ()=> {
        alert(this)   // document
    }

    arr.a()
}
```

## 6.异步

(1) Promise

> 异步操作同步化

```
Promise.all(['request1', 'request2']).then((arr) => {
    console.log(arr)
}, (err) => {})
```

```
Promise.all()   与：所有的都成功
Promise.race()   或：只要有一个完成即可（比赛）
```

局限： 带逻辑的异步操作麻烦

(2) generator
（Promise改进版）

> 生成器 <br>
> 能暂停

```
// 普通函数与生成器函数比较

function show() {
    alert('abc')
}

function *show2() {
    alert('aaa')
    alert('bbb')
}
```

```
function *show2() {
    alert('aaa')
    yield;     // (放弃，让步, 暂停的标志)
    alert('bbb')
}

// 不会直接执行，会返回一个generator对象
let gen = show2()

<!-- next 踹一脚走一步 -->
gen.next();   // aaa // 执行的是第一个yield之前的代码

gen.next();  // bbb

```

- yeild
  - 传参  （要传多个参数，传对象。yield只能接收一个参数）
  - 返回值

```
// 传参：  （联想分割，切菜）

function *show2() {
    alert('aaa')
    let a = yield;      // yield传参
    alert('bbb' + a)
}

let gen = show2()

gen.next();  

gen.next(12);  // bbb

```



```
// 返回值1：  

function *show2() {
    alert('aaa')
    yield  55;      // yield返回值
    alert('bbb')
}

let gen = show2()

let res1 = gen.next();  
console.log(res1)   // {value: 55, done:false}

let res2 = gen.next();  
console.log(res2)   // {value: undefined, done:true}
```
```
// 返回值2： (最后的返回值还是用return) 

function *show2() {
    alert('aaa')
    yield  55;      // yield返回值
    alert('bbb')
    return 5555
}

let gen = show2()

let res1 = gen.next();  
console.log(res1)   // {value: 55, done:false}

let res2 = gen.next();  
console.log(res2)   // {value: 5555, done:true}
```
generator + promise配合：
- 需要外来的runner辅助执行——不标准、不统一、性能低
- generator函数不能写成箭头函数

(3) async/await ( ES7)

```
async function show() {
	alert('a')
	await 12;
	alert('b')
}
show()

```

```
async function show() {
	alert('a')
	await new Promise((resolve,reject) => {
		setTimeout(function() {
			resolve();
		},1000)
	})
	alert('3s后的b')
}
show()
```

```
async function() {
    let res1 = await 请求1(异步操作)
    let res2 = await 请求2(异步操作)
    let res3 = await 请求3(异步操作)
    console.log(res1, res2, res3)
}

// 简写
(async ()=> {
    //....
})()
```
- await 错误处理
> 原始的`try { ... } catch(e) { ... }`
```
async function show() {
    try {
        let data1 = await $.ajax({ url: '1.txt', dataType: 'json})
        let data2 = await $.ajax({ url: 'rervvtrg.txt', dataType: 'json})
        let data3 = await $.ajax({ url: '3.txt', dataType: 'json})
    }catch(e) {
        alert('报错啦~~')
    }
}

show()
```
## 7. 模块化


## ES6编译：
ES6 -> ES5

babel： polyfill 工具