// const userSize = prompt("Input your grid size, the maximum is 100")
// const heightWidth = Number(userSize)
const heightWidth = 16
const container = document.querySelector('.container')

let div
const num = heightWidth * heightWidth
for (i = 0; i < num; i++) {
  div = document.createElement('div')
  container.style.gridTemplateColumns = `repeat(${heightWidth}, 1fr)`
  container.style.gridTemplateRows = `repeat(${heightWidth}, 1fr)`
  container.appendChild(div)
  div.classList.add('grid-item')
}

const randRGB = function () {
  return Math.random() * 255
}

const changeColor = function () {
  this.style.background = `rgb(${randRGB()}, ${randRGB()}, ${randRGB()})`
}

const gridItems = document.querySelectorAll('.grid-item')
gridItems.forEach(item => item.addEventListener('mouseover', changeColor))

