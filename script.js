const userSize = prompt("Input your grid size, the maximum is 100")
const heightWidth = Number(userSize)

const container = document.querySelector('.container')

let div
const num = heightWidth * heightWidth
for (i = 0; i < num; i++) {
  div = document.createElement('div')
  container.style.gridColumn = `repeat(${heightWidth}, 1fr)`
  // container.style.gridTemplateRow = `repeat(${heightWidth}, 1fr)`
  container.appendChild(div)
  div.classList.add('grid-item')
}

const changeColor = function () {
  // this.classList.add('hovered')
  this.style.background = "green"
}

const gridItems = document.querySelectorAll('.grid-item')
gridItems.forEach(item => item.addEventListener('mouseover', changeColor))

