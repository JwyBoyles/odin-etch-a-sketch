const container = document.querySelector('#container');

const divOne = document.createElement('div');
const divTwo = document.createElement('div');
const divThree = document.createElement('div');
const divFour = document.createElement('div');
const divFive = document.createElement('div');
const divSix = document.createElement('div');
const divSeven = document.createElement('div');
const divEight = document.createElement('div');
const divNine = document.createElement('div');
const divTen = document.createElement('div');
const divEleven = document.createElement('div');
const divTwelve = document.createElement('div');
const divThirteen = document.createElement('div');
const divFourteen = document.createElement('div');
const divFifteen = document.createElement('div');
const divSixteen = document.createElement('div');

container.appendChild(divOne);
container.appendChild(divTwo);
container.appendChild(divThree);
container.appendChild(divFour);
container.appendChild(divFive);
container.appendChild(divSix);
container.appendChild(divSeven);
container.appendChild(divEight);
container.appendChild(divNine);
container.appendChild(divTen);
container.appendChild(divEleven);
container.appendChild(divTwelve);
container.appendChild(divThirteen);
container.appendChild(divFourteen);
container.appendChild(divFifteen);
container.appendChild(divSixteen);

divOne.classList.add('gridItem');
divTwo.classList.add('gridItem');
divThree.classList.add('gridItem');
divFour.classList.add('gridItem');
divFive.classList.add('gridItem');
divSix.classList.add('gridItem');
divSeven.classList.add('gridItem');
divEight.classList.add('gridItem');
divNine.classList.add('gridItem');
divTen.classList.add('gridItem');
divEleven.classList.add('gridItem');
divTwelve.classList.add('gridItem');
divThirteen.classList.add('gridItem');
divFourteen.classList.add('gridItem');
divFifteen.classList.add('gridItem');
divSixteen.classList.add('gridItem');

let gridItem = document.getElementsByClassName("gridItem");

for (let i = 0; i < gridItem.length; ++i){
gridItem[i].addEventListener('mouseenter', () => {
  gridItem[i].classList.add('gridChosen');
});
}


