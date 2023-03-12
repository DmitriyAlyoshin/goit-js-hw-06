let counterValue = 0;

let decrementBtn = document.querySelector('[data-action="decrement"]');
let incrementBtn = document.querySelector('[data-action="increment"]');
let valueElement = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
  return console.log(counterValue);
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
  return console.log(counterValue);
});
