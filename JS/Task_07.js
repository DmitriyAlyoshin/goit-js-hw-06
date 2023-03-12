let inputElement = document.querySelector("#font-size-control");
let textElement = document.querySelector("#text");

inputElement.addEventListener("input", onRangeChange);

function onRangeChange(event) {
  textElement.style.fontSize = event.currentTarget.value + "px";
}
