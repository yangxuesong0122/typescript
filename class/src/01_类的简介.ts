/*
* 对象中主要包含两部分：
*   属性
*   方法
* */
class Person {
  /*
  * 直接定义的属性是实例属性，需要通过对象的实例去访问
  *   const per = new Person()
  *   per.name
  *   readonly: 表示只读的属性，不可修改
  * 使用static开头的是静态属性（类属性），可以直接通过类访问
  *   Person.age
  * */
  // 定义实例属性
  // readonly name: string = 'yxs'
  name: string = 'yxs'

  // 定义类属性：使用static关键字，也称为静态属性
  static age: number = 18

  // 实例方法
  sayHello() {
    console.log('hello')
  }
  // 方法以static开头就是类方法
  static sayHi() {
    console.log('hi')
  }
}
const per = new Person()
console.log(per.name)
console.log(Person.age)

// 直接修改实例属性
per.name = 'yxs1'
console.log(per.name)

// 实例调用方法
per.sayHello()
// 调用类方法
Person.sayHi()

class Person1 {
  constructor(private _age: number) {}
  get age() {
    return this._age - 10
  }
  set age(age: number) {
    this._age = age + 3
  }
}
let p = new Person1(28)
p.age = 25
console.log(p.age)

