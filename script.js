const signupForm = document.getElementById("signup-form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");
const input = document.querySelectorAll("input");

// turn off default error messages
signupForm.noValidate = true;

// todo
// on submit, validate all fields
// on focus change, check validity
// after focus change, swap to aggressive error checking

const displayError = (field, message) => {
  const errorSpan = field.parentElement.getElementsByTagName("span")[0];
  errorSpan.textContent = message;
  field.classList.remove("success");
  field.classList.add("error");
};

const displaySuccess = (field) => {
  const errorSpan = field.parentElement.getElementsByTagName("span")[0];
  errorSpan.textContent = "";
  field.classList.remove("error");
  field.classList.add("success");
};

// validate form on submission
const validateForm = (e) => {
  const form = e.target;

  if (!form.checkValidity()) {
    // form is invalid
    //  check each field for validity
    //  if invalid, displayError
  } else {
    input.forEach((i) => {
      i.classList.add("success");
      i.classList.remove("error");
    });
  }
  e.preventDefault();
  e.stopImmediatePropagation();
};

// validate form on submit
signupForm.addEventListener("submit", validateForm);
