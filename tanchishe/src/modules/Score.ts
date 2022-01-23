// 定义表示积分的类
export default class Score {
  score = 0
  level = 1
  // 分数和等级所在的元素
  scoreSpan: HTMLElement
  levelSpan: HTMLElement

  // 设置一个变量限制等级
  maxLevel: number
  // 表示多少分升级
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreSpan = document.getElementById('score')!
    this.levelSpan = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 设置加分的方法
  addScore() {
    this.score++
    this.scoreSpan.innerHTML = this.score + ''
    // 判断分数去升级
    if (this.score % this.upScore === 0) {
      this.addLevel()
    }
  }
  // 设置加等级的方法
  addLevel() {
    this.level++
    if (this.level < this.maxLevel) {
      this.levelSpan.innerHTML = this.level + ''
    }
  }
}