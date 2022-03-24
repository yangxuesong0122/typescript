// object表示一个js对象
let a: object
a = {}
a = function (){}

// {属性名: 属性值, 属性名: 属性值} 用来指定对象中可以包含哪些属性
// 属性名后面加上？表示属性是可选的
// let b: {
//   name: string;
//   age?: number;
// }
// 可以省略分号
let b: {
  name: string
  age?: number
  sum: (num1: number, num2: number) => number
}
// b = {} // 报错
b = {
  name: 'yxs',
  sum: function (num1, num2) {
    return num1 + num2
  }
}

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any}
c = {name: 'yxs', age: 18, gender: '男'}

/*
* 设置函数接口的类型声明
*   语法(形参: 类型, 形参: 类型, ...) => 返回值
* */
let d: (a: number, b: number) => number = function (n1, n2) {
  return n1 + n2
}

/*
* 数组的类型声明：
*   类型[]
*   Array<类型>
* */
// string[] 表示字符串数组
let e: string[]
// number[] 表示数值数组
let f: number[]
let g: Array<number>
g = [1, 2, 3]
interface List {
  [index: number]: number
}
let list: List = [1, 2, 3]

function fun() {
  let list: IArguments = arguments
}

/*
* 元组，就是固定长度的数组
*   语法：[类型, 类型]
* */
let h:[string, string]
// h = ['hello', 'yxs', 123] // 报错

/*
* enum 枚举
*
* */
enum Gender {
  Male,
  Female
}
let i: {name: string, gender: Gender}  // let i: {name: string, gender: 0 | 1}
i = {
  name: 'yxs',
  gender: Gender.Male
}

let j: string | number
// & 表示同时,一般用来连接两个对象
let k: string & number
let l: {name: string} & {age: number}
l = {name: 'yxs', age: 18}

// 类型的别名
let m: 1 | 2 | 3
type myType = 1 | 2 | 3
let n: myType
// n = 4 // 报错，只能是1，2，3

// 函数重载(前两个叫重载签名，最后一个叫实现签名),目的在于表意更清楚
// 前两个函数重载定义函数如何调用
function getInfo(name: string): string
function getInfo(age: number): string
function getInfo(str: any): any {
  if (typeof str === 'string') {
    return '我叫' + str
  } else {
    return '我的年龄是' + str
  }
}
console.log(getInfo('yxs'))
console.log(getInfo(18))
// console.log(getInfo(true))

