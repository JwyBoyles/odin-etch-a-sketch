const container = document.querySelector('#container');

function createGrid() {
    let div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('gridItem')
}

for (let p = 0; p < 64; ++p) {
    createGrid()
}

let gridItem = document.getElementsByClassName("gridItem");

for (let i = 0; i < gridItem.length; ++i){
gridItem[i].addEventListener('mouseenter', () => {
  gridItem[i].classList.add('gridChosen');
});
}



