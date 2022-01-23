export default class Snake {
  // 获取蛇的容器
  element: HTMLElement
  // 表示蛇头的元素
  headElement: HTMLElement
  // 蛇身体，包括蛇头
  snakeBody: HTMLCollection // Collection 是一个集合，会实时刷新

  constructor() {
    this.element = document.getElementById('snake')!
    this.headElement = document.querySelector('#snake > div')!
    this.snakeBody = this.element.getElementsByTagName('div')
  }

  // 获取蛇头坐标
  get X() {
    return this.headElement.offsetLeft
  }
  get Y() {
    return this.headElement.offsetTop
  }

  // 设置蛇头坐标
  set X(val: number) {
    // 新值和旧值相同，则不修改
    if(this.X === val) return
    // X 值的合法范围检查（0-290）
    if(val < 0 || val > 290) {
      // 蛇撞墙了
      throw new Error('蛇撞墙了,游戏结束')
    }
    // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if(this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft === val) {
      // 发生了掉头，让蛇向反方向继续移动
      if(val > this.X) { // 向右走
        val = this.X - 10
      } else { // 向左走
        val = this.X + 10
      }
    }
    // 移动身体
    this.moveBody()
    this.headElement.style.left = val + 'px'
    this.checkHeadBody()
  }
  set Y(val: number) {
    if(this.Y === val) return
    // Y 值的合法范围检查（0-290）
    if(val < 0 || val > 290) {
      // 蛇撞墙了
      throw new Error('蛇撞墙了,游戏结束')
    }

    if(this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop === val) {
      if(val > this.Y) {
        val = this.Y - 10
      } else {
        val = this.Y + 10
      }
    }

    // 移动身体
    this.moveBody()
    this.headElement.style.top = val + 'px'
    this.checkHeadBody()
  }

  // 蛇增加身体方法
  addBody() {
    // 向蛇容器添加一个div
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 蛇身体移动方法
  moveBody() {
    /*
    * 将后边身体设置为前边身体的位置
    * */
    // 遍历获取所有的身体
    for(let i = this.snakeBody.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let X = (this.snakeBody[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.snakeBody[i - 1] as HTMLElement).offsetTop;
      // 将前边身体设置到当前身体上
      (this.snakeBody[i] as HTMLElement).style.left = X + 'px';
      (this.snakeBody[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  // 检查头和身体有没有相撞
  checkHeadBody() {
    // 获取所有的身体，价差其是否和蛇头的坐标发生重叠
    for(let i = 1; i < this.snakeBody.length; i++) {
      let bd = this.snakeBody[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 说明蛇头撞到了身体，游戏结束
        throw new Error('撞到了自己的身体，游戏结束')
      }
    }
  }
}