let board = document.getElementById('board');
let amoutOfCubs = 506;


for(let i = 0; i < amoutOfCubs; i++){
    let cub = document.createElement('div');
    cub.classList.add('cub');
    board.append(cub);
    cub.addEventListener('mouseenter', () => addColor(cub));
    cub.addEventListener('mouseleave', () => removeColor(cub));
    
}

function addColor(item) {
    item.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    item.style.boxShadow = '0 0 3px purple';
}
function removeColor(element) {
    element.style.background = '';
    element.style.boxShadow = '';
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}