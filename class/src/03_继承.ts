(function () {
  // 父类
  class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHello() {
      console.log('动物叫')
    }
  }

  /*
    使用继承后，子类将会拥有父类所有的属性和方法
    通过继承可以将多个类中共有的代码写在一个父类中
      这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
    子类中有和父类相同的方法，则子类会覆盖父类的方法
      方法的重写
  */

  // 继承Animal
  class Dog extends Animal {
    // sayHello() {
    //   console.log('汪汪汪')
    // }
    run() {
      console.log(`${this.name}在跑`)
    }
  }

  // 继承Animal
  class Cat extends Animal {
    sayHello() {
      console.log('喵喵')
    }
  }

  const dog = new Dog('旺财', 3)
  dog.sayHello()
  dog.run()

  const cat = new Cat('旺财', 3)
  cat.sayHello()
})()