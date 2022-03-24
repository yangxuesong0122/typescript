// 断言方式一：
  // const aLink = document.getElementById('link') as HTMLAnchorElement

// 断言方式二：（不常用）
const aLink = <HTMLAnchorElement>document.getElementById('link')
aLink.href
/*
  在浏览器控制台，通过console.dir()打印元素，在属性列表最后面，即可看到该元素类型
*/

let p = { x: 1, y: 2 }
function point(point: typeof p) {}

// 类在ts中也是作为一种类型存在
class Person1 {}
let p1 = new Person1()