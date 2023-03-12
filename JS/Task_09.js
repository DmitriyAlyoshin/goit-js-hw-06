function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let body = document.querySelector("body");
let buttonElement = document.querySelector(".change-color");
let colorText = document.querySelector(".color");

buttonElement.addEventListener("click", onButtonClick);

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}
