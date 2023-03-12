let form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in");
  }

  let userData = { email: email.value, password: password.value };

  console.log(userData);
  event.target.reset();
}
