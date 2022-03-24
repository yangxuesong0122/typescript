(function () {
  // 描述一个对象的类型
  // 类型别名
  type myType = {
    name: string,
    age: number
  }
  type myType1 = myType & {
    gender: string
  }
  const obj: myType1 = {
    name: 'yxs',
    age: 18,
    gender: 'man'
  }
  /*
    接口实际上就是一个规范，是对类的限制
  * 接口用来定义一个类结构
  *   用来定义一个类中应该包含哪些属性和方法
  *   接口也可以当成类型声明去使用
  *   可以在定义类的时候去限制类的结构
  *     接口中的所有的属性都不能有实际的值
  *     接口只定义对象的结构，而不考虑实际值
  *     接口中所有的方法都是抽象方法
  * */
  interface myInterface {
    readonly name: string;
    age: number;
    salary?: number;
    [propsName: string]: any;
    say(): string;
  }

  // 扩展接口
  interface myInterface {
    gender: string;
  }
  interface mySupInterface extends myInterface {
    job: string;
    eat(): void;
  }
  const obj1: myInterface = {
    name: 'yxs',
    age: 18,
    gender: '男',
    say() {
      return 'yxs'
    }
  }
  // obj1.name = 'yxs1'

  interface myInter {
    name: string;
    sayHello(): void;
  }
  /*
  * 定义类时，可以使类去实现一个接口
  *   实现接口就是使类满足接口的要求
  * */
  class MyClass implements myInter {
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayHello() {}
  }

  // 对数组约束的接口
  interface UserArr {
    [index: number]: string
  }
  const arr: UserArr = ['1']
})()