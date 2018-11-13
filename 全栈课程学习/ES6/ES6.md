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
## 6. Promise


## 7. generator
## 8. 模块
