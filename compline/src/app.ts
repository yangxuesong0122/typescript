import {hi} from './m.js'
let c = 10
console.log(hi)

// function fn(a, b) {
//   return a + b
// }
function fn(a: number, b: number) {
  return a + b
}

// function bb() {
//   console.log(this)
// }

function bb(this: Window) {
  console.log(this)
}

let box = document.getElementById('box')
box?.addEventListener('click', function () {
  alert('hello')
})