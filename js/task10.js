const inputAmountRef = document.querySelector("#controls input");
const butCreateRef = document.querySelector("[data-create]");
const butDestrRef = document.querySelector("[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");
let divSize = 30;
butCreateRef.addEventListener("click", onCreateButtClick);
butDestrRef.addEventListener("click", onDestrButtClick);

function onCreateButtClick() {
  if (inputAmountRef.value) {
    createBoxes(inputAmountRef.value);
  }
}

function onDestrButtClick()
{
    divBoxesRef.innerHTML = "";
    divSize = 30;
}

function createBoxes(amount) {
  console.log(amount);
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
     const div = document.createElement('div');
     div.style.width = divSize + 'px';
     div.style.height = divSize + 'px';
     div.style.backgroundColor = getRandomHexColor();
     divArr.push(div);
     divSize += 10;
  }
  divBoxesRef.append(...divArr);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
