class Dog {
  name: string
  age: number
  // 构造函数在对象创建时调用，也就是 new 时候
  constructor(name: string, age: number) {
    // this 表示当前对象，当前对象就是当前新建的那个对象，可以通过this向新建的对象中添加属性
    // console.log(this)
    this.name = name
    this.age = age
  }
  bark() {
    // alert('汪汪汪')
    console.log(this)
  }
}
const dog = new Dog('旺财', 3)
dog.bark()

const dog1 = new Dog('小黑', 4)
dog1.bark()

// const dog2 = new Dog()
// console.log(dog2)
//
// const dog3 = new Dog()
// console.log(dog3)