let inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value === "") {
    inputElement.classList.remove("valid");
    inputElement.classList.remove("invalid");
  } else if (
    inputElement.value.length < inputElement.getAttribute("data-length") ||
    inputElement.value.length > inputElement.getAttribute("data-length")
  ) {
    inputElement.classList.add("invalid");
  } else {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  }
};
