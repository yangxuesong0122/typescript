/* 
  装饰器：
    一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
    就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
*/
// 类装饰器：在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义
// 普通装饰器（无法传参）
/* function logClass(params: any) {
  // params 就是当前类
  params.prototype.apiUrl = 'xxx'
}
@logClass
class HttpClass {
  constructor() {}
  getData() {}
}
let http: any = new HttpClass()
console.log(http.apiUrl) */

// 装饰器工厂（可传参）
/* function logClass(params: string) {
  return function(target: any) {
    console.log(target, params)
    target.prototype.apiUrl = params
  }
}

@logClass('http://www.hello.com')
class HttpClass {
  constructor() {}
  getData() {}
} */

// 重载构造函数
/* function logClass(params: any) {
  return class extends params {
    apiUrl: any = '我是修改后的数据'
    getData() {
      this.apiUrl = this.apiUrl + '---'
      console.log(this.apiUrl)
    }
  }
}

@logClass
class HttpClass {
  apiUrl: string
  constructor() {
    this.apiUrl = '我是构造函数里面的apiUrl'
  }
  getData() {
    console.log(this.apiUrl)
  }
}
let http = new HttpClass()
http.getData() */

/* 
  属性装饰器:
    在运行时当作函数被调用，传入两个参数：
      1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
      2.成员的名字
 */

// 类装饰器
function logClass(params: string) {
  return function(target: any) {
    console.log(target, params)
  }
}
// 属性装饰器
function logProperty(params: any) {
  return function(target: any, attr: any) {
    console.log(target, attr)
    target[attr] = params
  }
}

@logClass('xxx')
class HttpClass {
  @logProperty('http://www.baidu.com')
  url: any | undefined
  constructor() {}
  getData() {
    console.log(this.url)
  }
}
