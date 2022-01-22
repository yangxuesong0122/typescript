(function () {
  /*
  * 以abstract开头的类是抽象类
  *   不能用来创建对象
  *   专门用来被继承的类
  *   可以添加抽象方法
  * */
  abstract class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }

    /*
    * 定义抽象方法
    *   使用 abstract 开头，没有方法体
    *   只能定义在抽象类中，子类必须对抽象方法进行重写
    * */
    abstract sayHello():void
    // 也可以有普通方法
  }

  class Dog extends Animal {
    sayHello() {
      console.log('顶顶顶')
    }
  }

  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵')
    }
  }

  const dog = new Dog('旺财')
  dog.sayHello()

  // const an = new Animal()
})()