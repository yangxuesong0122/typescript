namespace A {
  // 避免命名冲突
  // 命名空间里面的方法默认私有的
  interface Animal {
    name: string
    eat(): void
  }
  export class Dog implements Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    eat() {
      console.log(`${this.name}吃狗粮`)
    }
  }
  export class Cat implements Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    eat() {
      console.log(`${this.name}吃猫粮`)
    }
  }
}

let d = new A.Dog('蛋黄')
d.eat()