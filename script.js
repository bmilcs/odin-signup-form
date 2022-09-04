const form = document.getElementById("signup-form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password_confirm");

// turn off default error messages
form.noValidate = true;

// todo
// on submit, validate all fields
// on focus change, check validity
// after focus change, swap to aggressive error checking

// functions

// displayError(field, message)
//  display message in the field's corresponding span element
//  add error class, remove success class

// displaySuccess(field)
//  remove error message from corresponding span
//  remove error class, add success class

// validateFields()
//  check each field for validity
//  if invalid, displayError
//  if valid, displaySuccess
