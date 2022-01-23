// 定义食物类
export default class Food {
  /*定义一个属性表示食物所对应的元素*/
  element: HTMLElement
  constructor() {
    /* ! 表示不会为空 */
    this.element = document.getElementById('food')!
  }

  // 获取食物x轴坐标方法
  get X() {
    return  this.element.offsetLeft
  }
  // 获取食物Y轴坐标方法
  get Y() {
    return  this.element.offsetTop
  }

  // 修改食物位置方法
  change() {
    // 生成随机的位置
    // 食物的最小位置是0，最大是290；并且
    // 蛇移动一次就是一格，一格的大小是10，所以要求食物的坐标必须是10的倍数
    // Math.random()生成0-1，但不包括0和1，用round四舍五入就可以包括0和1
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10

    this.element.style.left = `${left}px`
    this.element.style.top = `${top}px`
  }
}