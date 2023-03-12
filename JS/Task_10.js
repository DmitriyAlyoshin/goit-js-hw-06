function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let input = document.querySelector("input");
let createBtn = document.querySelector("[data-create]");
let destroyBtn = document.querySelector("[data-destroy]");
let boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", setAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let elementsToAdd = [];

  for (let i = 0; i < amount; i += 1) {
    let square = document.createElement("div");
    let squareDimension = 30;

    square.style.height = `${squareDimension + i * 10}px`;
    square.style.width = `${squareDimension + i * 10}px`;
    square.style.backgroundColor = getRandomHexColor();

    elementsToAdd.push(square);
  }

  return elementsToAdd;
}

function setAmount() {
  let amount = createBoxes(input.value);
  boxes.append(...amount);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
