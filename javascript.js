const container = document.querySelector('#container');
const button = document.querySelector('#button');
let input;

button.addEventListener('click', () => {
  input = prompt("Please select a number between 1 and 100 to create a new grid");
  if (input > 0 && input <= 100 && input != undefined) {
  newGrid()
  }
  else {
    alert ("You selected a number out of range, click the button again and choose a number between 1 and 100")
  }
});

function originalGrid() {
    let div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('gridItem')
}

container.style.gridTemplateColumns = `repeat(${16}, 1fr)`
container.style.gridTemplateRows = `repeat(${16}, 1fr)`

for (let p = 0; p < 256; ++p) {
    originalGrid()
}


let gridItem = document.getElementsByClassName("gridItem");

for (let i = 0; i < gridItem.length; ++i){
gridItem[i].addEventListener('mouseenter', () => {
  gridItem[i].classList.add('gridChosen');
});
}

function newGrid() {
  for (let i = 0; i < gridItem.length; ++i){
      gridItem[i].classList.remove('gridChosen');
    };
  
container.style.gridTemplateColumns = `repeat(${input}, 1fr)`
container.style.gridTemplateRows = `repeat(${input}, 1fr)`
for (let p = 0; p < (input * input); ++p) {
  originalGrid()
}
for (let i = 0; i < gridItem.length; ++i){
gridItem[i].addEventListener('mouseenter', () => {
  gridItem[i].classList.add('gridChosen');
});
}
}

