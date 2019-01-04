// ES6字符串模板原理

let name = 'xiaohong', age = '12';
// `${name}今年${age}岁了`

let desc = "${name}今年${age}岁了"

function replace(desc) { 
    return desc.replace(/\$\{([^}]+)\}/g, function(matched, key) {
        // console.log(arguments)
        return eval(key)
    })
}

console.log(replace(desc))


// 数组遍历拼接字符串模板
let users = [
    {
        id: 1,
        name: 'test1'
    },
    {
        id: 1,
        name: 'test1'
    }
]

/*********************************************** */

// map函数   映射，把数组里的每一个元素映射为新数组的每一个元素
let newLis = users.map(function(user, index) {
    return `<li>${user.id}: ${user.name}</li>`;
}).join('')

let ul = `
<ul>${newLis}</ul>
`

console.log(ul)

/** 
 <ul>
    <li>1: test1</li>
    <li>1: test1</li>
 </ul>
**/

/*********************************************** */
function desc(strings, name, age) {

/**
 console.log(arguments)
 
    0: (3) ["", "今年", "岁了", raw: Array(3)]
    1: "xiaohong"
    2: "12"
 */

    console.log(strings)   // ["", "今年", "岁了", raw: Array(3)]
    console.log(name)   // xiaohong
    console.log(age)  // 12
}

let str = desc`${name}今年${age}岁了`


/*********************************************** */




/*********************************************** */




/*********************************************** */




/*********************************************** */




/*********************************************** */