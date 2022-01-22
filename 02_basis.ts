// 声明变量a同时指定类型number
let a: number
a = 10
// a = 'hello' // 报错，因为a的类型是number，不能赋值字符串

let b: string
b = 'hello'
// b = 3

// let c: boolean = true

// 如果变量的声明和赋值是同时进行的，TS 可以自动对变量进行类型检测
let c = false
// c = 123

// JS 中的函数是不考虑参数的类型和个数的
function sum(a: number, b: number): number {
  return a + b
  // return a + 'hello'
}
// console.log(sum(123, 456)) // 579
// console.log(sum(123, '456')) // 报错
// console.log(sum(123, 456, 789)) // 报错
let res = sum(123, 456)
