(function () {
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayHello() {
      console.log('动物在叫~~')
    }
  }

  class Dog extends Animal {
    age: number
    // 如果在子类中写了构造函数，在子类的构造函数中必须对父类构造函数进行调用
    constructor(name: string, age: number) {
      super(name)
      this.age = age
    }
    sayHello() {
      // super 表示当前类的父类
      super.sayHello()
    }
  }
  const dog = new Dog('旺财', 8)
  dog.sayHello()
})()