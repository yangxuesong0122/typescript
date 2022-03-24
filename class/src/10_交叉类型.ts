// 交叉类型功能类似于接口继承，用于组合多个类型为一个类型（常用于对象类型）

interface Person2 {
  name: string
}
interface Contact2 {
  phone: string
}

type PersonDetail = Person2 & Contact2
let obj1: PersonDetail = {
  name: 'yxs',
  phone: '133...'
}