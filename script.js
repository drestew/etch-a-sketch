const slider = document.querySelector('#slider')
const container = document.querySelector('.container')

let div
const createGrid = function (size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`
  console.log(size)
  for (i = 0; i < (size ** 2); i++) {
    div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('grid-item')
  }
  addGridEvents()
}

const clearGrid = function () {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

// randomize color on hover
const randRGB = function () {
  return Math.random() * 255
}

const changeColor = function () {
  this.style.background = `rgb(${randRGB()}, ${randRGB()}, ${randRGB()})`
}

const addGridEvents = function () {
  let gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(item => item.addEventListener('mouseover', changeColor))
}

// adjust grid based on new slider value
slider.addEventListener('mouseup', function () {
  clearGrid()
  createGrid(this.value)
})
createGrid(50)
