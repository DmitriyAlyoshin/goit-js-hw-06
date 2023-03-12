const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

let elements = ingredients.map((ingredient) => {
  let itemElement = document.createElement("li");
  itemElement.classList.add("item");
  itemElement.textContent = ingredient;

  return itemElement;
});

ingredientsListRef.append(...elements);
