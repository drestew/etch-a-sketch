// document.querySelector('.container').appendChild(div)
const container = document.querySelector('.container')

let div
const num = 64
for (i = 0; i < num; i++) {
  div = document.createElement('div')
  container.appendChild(div)
  div.classList.add('grid-item')
}

// div.forEach(el => el.classList.add('.grd'))