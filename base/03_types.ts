// 可以直接使用字面量进行类型声明
let a: 10
// a = 11

// 可以使用 | 连接多个类型(联合类型)
let b: 'male' | 'female'
b = 'male'
b = 'female'
// b = 'hello'

let c: boolean | string
c = true
c = 'hello'
// c = 123

// any 表示任意类型,相当于对该变量关闭TS的类型检查
// 声明变量如果不指定类型，则 TS 解析器会自动判断变量的类型为 any （隐式的any）
// let d
let d: any
d = 10
d = true
d = 'hello'

// unknown 表示未知类型的值
let e: unknown
e = 10
e = true

// d 的类型是any，可以赋值给任意变量
let s: string
// s = d
e = 'hello'
// unknown 实际上就是类型安全的any，不能直接赋值给其他变量
// s = e
// 解决方法1：类型判断
if (typeof e === 'string') {
  s = e
}
// 解决方法2：类型断言，用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
* */
s = e as string // 告诉编译器，e就是字符串
s = <string>e

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
  // return
  // return undefined
  return null
}

// never 表示永远不回返回结果
function fn2(): never {
  throw new Error('报错了')
}