// document.querySelector('.container').appendChild(div)
const container = document.querySelector('.container')

let div
let heightWidth = 16
const num = heightWidth * heightWidth
for (i = 0; i < num; i++) {
  div = document.createElement('div')
  container.appendChild(div)
  div.classList.add('grid-item')
}

const changeColor = function () {
  // this.classList.add('hovered')
  this.style.background = "green"
}

const gridItems = document.querySelectorAll('.grid-item')
gridItems.forEach(item => item.addEventListener('mouseover', changeColor))