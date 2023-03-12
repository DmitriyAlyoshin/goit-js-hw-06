let inputElement = document.querySelector("#name-input");
let outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputElement.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    outputElement.textContent = "Anonymous";
  }
}
