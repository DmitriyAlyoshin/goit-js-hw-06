const items = document.querySelectorAll(".item");

console.log("Number of categories: ", items.length); 

const categoriesInfo = items.forEach((element) => {
  const title = element.querySelector("h2");
  const categoriesLength = element.querySelectorAll("li");

  console.log("Category: ", title.textContent);
  console.log("Elements: ", categoriesLength.length);
});
