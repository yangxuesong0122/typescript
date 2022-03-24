interface Waiter {
  anjiao: boolean
  say: () => {}
}
interface Teacher {
  anjiao: boolean
  skill: () => {}
}
function judgeWho(animal: Waiter | Teacher) {
  // animal.say()
  // 类型保护一：类型断言
  /* if (animal.anjiao) {
    (animal as Teacher).skill()
  } else {
    (animal as Waiter).say()
  } */

  // 类型保护二：in的方法断言
  /* if ('skill' in animal) {
    animal.skill()
  } else {
    animal.say()
  } */
}

// 类型保护三：typeof
/* function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
} */

// 类型保护四：instanceof
class NumberObj {
  count: number = 0
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}