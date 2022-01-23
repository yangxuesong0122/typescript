import Score from './Score'
import Food from './Food'
import Snake from './Snake'

// 游戏控制器
export default class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake
  // 食物
  food: Food
  // 分数
  score: Score
  // 存储按键方向（蛇的移动方向）
  direction: string = ''
  // 记录游戏是否结束
  isLive: boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.score = new Score(10, 2)
    // 开始游戏
    this.init()
  }

  // 游戏初始化，调用后游戏开始
  init() {
    // 给整个网页绑定键盘按下事件
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
    // 让蛇移动
    this.run()
  }
  // 键盘按下响应函数
  /*
  * ArrowUp Up
  * ArrowDown Down
  * ArrowLeft Left
  * ArrowRight Right
  * */
  handleKeyDown(e: KeyboardEvent) {
    // 检查是否是方向键
    // 修改方向
    this.direction = e.key
  }

  // 控制蛇移动方法
  run() {
    /*
    * 根据 this.direction 来使蛇的位置改变
    *   向上 top减少
    *   向下 top增加
    *   向左 left减少
    *   向右 left增加
    * */
    // 获取蛇当前坐标
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        // 向上移动
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        // 向下移动
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        // 向左移动
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        // 向右移动
        X += 10
        break
      default:
        break
    }

    // 检查蛇是否吃到食物
    this.checkFood(X, Y)

    // 修改蛇的坐标
    // 容易出现撞墙的情况
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e: any) {
      alert(e.message)
      this.isLive = false
    }

    // 开启定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.score.level - 1) * 30)
  }

  // 检查蛇是否吃到食物
  checkFood(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物位置重置
      this.food.change()
      // 分数增加
      this.score.addScore()
      // 蛇增加一节
      this.snake.addBody()
    }
  }
}