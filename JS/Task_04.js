let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector("#value");

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
