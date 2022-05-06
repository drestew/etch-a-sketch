const slider = document.querySelector('#slider')
const screen = document.querySelector('.screen')
const rainbow = document.querySelector('.rainbow-container')
const clear = document.querySelector('#clear')
const gridSize = document.querySelector('#grid-size')

let div
const createGrid = function (size) {
  screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  screen.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (i = 0; i < (size ** 2); i++) {
    div = document.createElement('div')
    screen.appendChild(div)
    div.classList.add('grid-item')
  }
  gridSize.textContent = `${size}x${size}`
  addGridEvents()
}

const clearGrid = function () {
  document.querySelectorAll('.grid-item').forEach(item => {
    item.style.background = 'rgb(170, 170, 170)'
  })
}

// randomize color on hover
const randRGB = function () {
  return Math.random() * 255
}

const changeColor = function () {
  colorPicker.jscolor.hide()
  if (!rainbow.classList.contains('active')) {
    const newColor = colorPicker.getAttribute('data-current-color')
    this.style.background = `${newColor}`
  } else {
    // random color
    this.style.background = `rgb(${randRGB()}, ${randRGB()}, ${randRGB()})`
    colorPicker.setAttribute('data-current-color', 'FFFFFF')
  }
}

const addGridEvents = function () {
  jscolor.hide()
  let gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(item => item.addEventListener('mouseover', changeColor))
}

// adjust grid based on new slider value
slider.addEventListener('mouseup', function () {
  clearGrid()
  createGrid(this.value)
})
createGrid(50)

const colorPicker = document.querySelector('#color-picker')

jscolor.install()
const noRainbow = function () {
  rainbow.classList.remove('active')
  addGridEvents()
}
colorPicker.jscolor.onChange = noRainbow

const sliderToggle = function () {
  this.classList.toggle('active')
}

rainbow.addEventListener('click', sliderToggle)

clear.addEventListener('click', clearGrid)