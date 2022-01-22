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