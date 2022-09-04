const signupForm = document.getElementById("signup-form");

// turn off default error messages
signupForm.noValidate = true;

// todo
// on focus change, check validity
// after focus change, swap to aggressive error checking

function displayError(field, message = "") {
  const errorMessage = field.parentElement.getElementsByTagName("span")[0];
  errorMessage.textContent = message;
  field.classList.remove("success");
  field.classList.add("error");
}

function displaySuccess(field) {
  const errorMessage = field.parentElement.getElementsByTagName("span")[0];
  errorMessage.textContent = "";
  field.classList.remove("error");
  field.classList.add("success");
}

function validateForm(e) {
  const form = e.target;
  const field = Array.from(form.querySelectorAll("input"));

  // built-in html validation
  field.forEach((i) => validateField(i));

  // check for matching passwords
  const password = form.querySelector("#password");
  const passwordConfirm = form.querySelector("#password_confirm");
  let passwordMismatch = 1;

  if (validateField(password) && validateField(passwordConfirm)) {
    console.info("pw meet requirements");
    if (password.value !== passwordConfirm.value) {
      displayError(password, "Passwords must match");
      displayError(passwordConfirm);
      passwordMismatch = 1;
    } else passwordMismatch = 0;
  }

  if (!form.checkValidity() || passwordMismatch) {
    e.preventDefault();
    e.stopImmediatePropagation();
  } else alert("Success!");
}

function validateField(i) {
  if (i.checkValidity()) {
    displaySuccess(i);
    // let password matching know minimum requirements weren't met
    // prefer 8-32 char validation OVER inequality of values
    return true;
  } else {
    // Field is invalid
    if (i.id === "first_name" || i.id === "last_name") {
      displayError(i, "Enter a valid name");
    } else if (i.id === "email") {
      displayError(i, "Enter a valid email address");
    } else if (i.id === "phone") {
      displayError(i, "Enter a valid phone number");
    } else if (i.id === "password" || i.id === "password_confirm") {
      displayError(i, "Passwords must be 8-32 characters long.");
    } else displaySuccess(i);
  }
}

// validate form on submit
signupForm.addEventListener("submit", validateForm);
