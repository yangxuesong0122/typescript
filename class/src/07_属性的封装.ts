(function () {
  class Person {
    /*
    * TS 可以在属性前添加属性的修饰符
    *   public 修饰的属性可以在任意位置访问修改(包括子类)  默认值
    *   private 私有属性，只能在当前类内部进行访问（修改）
    *   protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
    *   可以通过在类中添加方法使得私有属性可以被外部访问
    * */
    private _name: string
    private _age: number
    constructor(name: string, age: number) {
      this._name = name
      this._age = age
    }

    /*
    * getter 方法用来读取属性
    * setter 方法用来设置属性
    *   他们被称为属性的存取器
    * */

    // 用来获取name属性
    // getName() {
    //   return this._name
    // }
    // 用来设置name属性
    // setName(val: string) {
    //   this._name = val
    // }

    // 用来获取name属性
    // getAge() {
    //   return this._age
    // }
    // 用来设置name属性
    // setAge(val: number) {
    //   // 对年龄进行限制
    //   if (val >= 0) {
    //     this._age = val
    //   }
    // }

    // TS 中设置gette方法的方式
    get name() {
      console.log('get name()执行了')
      return this._name
    }
    set name(val: string) {
      this._name = val
    }
  }
  const per = new Person('yxs', 18)
  /*
  * 现在属性实在对象中设置的，可以被任意的修改
  *   会导致对象中的数据变得非常不安全
  * */
  // per.name = 'yxs1'
  // per.age = 19
  // per.setName('yxs1')
  // per.setAge(-100)
  // console.log(per)
  per.name = 'yxs111'
  console.log(per.name)

  class A {
    /*name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }*/
    
    // 可以直接将属性定义在构造函数中
    constructor(public name: string, public age: number) {
    }
  }
  const a = new A('yyy', 18)
  console.log(a)
})()