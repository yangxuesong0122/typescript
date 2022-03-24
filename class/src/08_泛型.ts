// function fn(a: any): any {
//   return a
// }

/*
* 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
* */
function fn<K>(a: K): K{
  return a
}

// 可以直接调用具有泛型的函数
let res1 = fn(10) // 会自动判断出 K 的类型是number，运用到 TS 的类型自动推断
let res2 = fn<string>('hello') // 指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T{
  console.log(b)
  return a
}
fn2<number, string>(123, 'hello')

// T extends Inter：表示泛型T必须是Inter实现类（子类）
interface Inter {
  length: number
}
function fn3<T extends Inter>(a: T): number{
  return a.length
}
console.log(fn3('123'))

class MyClass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}
const mc = new MyClass<string>('YXS')

// 泛型中数组的使用
// function myFun<T>(params: Array<T>) {
function myFun<T>(params: T[]) {
  return params
}
myFun<string>(['1', '2'])


// class ToDo {
//   constructor(private todos: string[]) {
//
//   }
//   getTodo(index: number) {
//     return this.todos[index]
//   }
// }
// const todo = new ToDo(['吃饭', '睡觉', '打代码'])
// console.log(todo.getTodo(1))

// class ToDo<T> {
//   constructor(private todos: T[]) {
//   }
//   getTodo(index: number): T {
//     return this.todos[index]
//   }
// }
// const todo = new ToDo<string>(['吃饭', '睡觉', '打代码'])
// console.log(todo.getTodo(1))


// interface todo {
//   name: string
// }
// // 泛型中必须要有个name属性
// class ToDo<T extends todo> {
//   constructor(private todos: T[]) {
//   }
//   getTodo(index: number): string {
//     return this.todos[index].name
//   }
// }
// const todo = new ToDo([{name: '吃饭'}, {name: '睡觉'}])
// console.log(todo.getTodo(1))

// 泛型的约束
class ToDo<T extends string | number> {
  constructor(private todos: T[]) {
  }
  getTodo(index: number): T {
    return this.todos[index]
  }
}
const todo = new ToDo<string>(['吃饭', '睡觉', '打代码'])
console.log(todo.getTodo(1))

/* 
  类型变量之间还可以约束（比如第二个类型变量受第一个类型变量约束）
    keyof 关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型
*/
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let pe = {
  name: 'yxs',
  age: 18
}
getProp(pe, 'name')
