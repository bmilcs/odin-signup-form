const signupForm = document.getElementById("signup-form");

// turn off default error messages
signupForm.noValidate = true;

// displays error message in a span underneath the given input field
// @param input html element & custom error message
function displayError(field, message = "") {
  const errorSpan = field.parentElement.getElementsByTagName("span")[0];
  errorSpan.textContent = message;
  field.classList.remove("success");
  field.classList.add("error");
}

// displays green border around a given input field
// @param input html element
function displaySuccess(field) {
  const errorSpan = field.parentElement.getElementsByTagName("span")[0];
  errorSpan.textContent = "";
  field.classList.remove("error");
  field.classList.add("success");
}

// validates the entire form via built-in html validation & password matching function
// @param event handler, triggered by submit button & keyboard input after 1st submit
function validateForm(e) {
  const form = e.target;

  // array used for built-in html error checking
  const fieldArray = Array.from(form.querySelectorAll("input"));

  // passwords used for string comparison
  const password = form.querySelector("#password");
  const passwordConfirm = form.querySelector("#password_confirm");

  // add custom error messages via built-in html validation to all inputs
  fieldArray.forEach((i) => validateField(i));

  // check if passwords match one another & provide visual feedback
  // returns 1 if matching, 0 if not
  const matchingPasswords = validateMatchingPasswords(
    password,
    passwordConfirm
  );

  // prevents form submission until all parameters are met
  if (!form.checkValidity() || !matchingPasswords) {
    e.preventDefault();
    e.stopImmediatePropagation();

    // activates live feedback as the user types: validates inputs & pw matching
    // adds keyup eventhandler for all input fields
    enableAggressiveValidation(fieldArray, password, passwordConfirm);
  } else {
    // validation successful!
    alert("Success!");
  }
}

// validates an individual input field via built-in html attributes
// @params input field element
function validateField(field) {
  // if field passes built-in html validity checks
  if (field.checkValidity()) {
    displaySuccess(field);
    // let validateMatchingPasswords() know minimum requirements were met
    // that way "8-32 char" validation message takes precedence OVER password mismatch
    return true;
  } else {
    // field failed html-based validation
    if (field.id === "first_name" || field.id === "last_name") {
      displayError(field, "Enter a valid name");
    } else if (field.id === "email") {
      displayError(field, "Enter a valid email address");
    } else if (field.id === "phone") {
      displayError(field, "Enter a valid phone number");
    } else if (field.id === "password" || field.id === "password_confirm") {
      displayError(field, "Passwords must be 8-32 characters long.");
    }
  }
}

// checks to see if the two password fields are equal
// password mismatch error doesn't display until minimum requirements are met
// @params password elements
function validateMatchingPasswords(password, passwordConfirm) {
  // if passwords meet base requirements: 8-32 chars
  if (validateField(password) && validateField(passwordConfirm)) {
    // and password fields don't match
    if (password.value !== passwordConfirm.value) {
      displayError(password, "Passwords must match");
      displayError(passwordConfirm);

      // let validateForm function know passwords don't match
      return 0;
    }
  }
  // let validateForm function know passwords match
  return 1;
}

// provides real-time feedback, coloring the border of the input field as
// the user types. this only occurs after a failed submit.
// @params input field array & 2 password html elements
function enableAggressiveValidation(fieldArray, password, passwordConfirm) {
  // after focus change, swap to aggressive error checking
  fieldArray.forEach((i) => {
    i.addEventListener("keyup", (e) => {
      validateField(e.target);
      if (i.id === "password" || i.id === "password_confirm")
        validateMatchingPasswords(password, passwordConfirm);
    });
  });
}

// validate form on submit
signupForm.addEventListener("submit", validateForm);
