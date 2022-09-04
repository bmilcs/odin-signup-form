# Odin Project #6: Sign-up Form

Welcome to Bryan Miller's Sign-up Form Project, the [sixth assignment](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form) within the Odin Project curriculum. The goal of this repo is to practice the following skill sets:

- HTML
  - Forms
  - Labels & Input Elements
  - Built-in Validation
- CSS (Vanilla)
  - Pseudo-classes
  - Custom CSS Properties
  - Relative & Absolute Positioning
  - Responsive Design (Desktop only)
    - Functions: `clamp`, `min`, `max`
    - Relative units: `em`, `rem`, `ch`
  - Typography
    - `line-height` & `letter-spacing`
  - "Basic" CSS Reset using `*` & `::before` / `::after`
- JavaScript
  - Custom form validation error messages
  - Array & `forEach` method
  - Password value comparison
  - Return values
- Chrome DevTools & Debugging
- Git Fundamentals

## Links

- [Live Demo](https://bmilcs.github.io/odin-signup-form/)
- [My Odin Project Progress](https://github.com/bmilcs/op)

## Summary

A combination of built-in HTML and JavaScript constraint validation were used to accomplish this project. I didn't want to aggressively alert the user of input errors before they had a chance to complete the form so validation occurs after the submit button is pressed for the first time.

Once the user hits submit, the `validateForm()` function is called. `validateForm()` creates an array of `input` fields, assigns the password elements to variables and then gets to work. Using `.forEach`, every input field is checked for validity using the `validateField()` function. Then, the passwords are checked for equality using the `validateMatchingPasswords()` function.

Return values notify the initial `validateForm()` function call whether or not the form validation was successful. When a user provides an improperly formatted input value, visual feedback in the form of colorful borders are applied to all input elements (green for valid, red for invalid) and error messages are displayed in `<span>` elements below the guilty parties.

The `aggressiveValidation()` function is called, which activates live feedback as the user types using the `keyup` EventListener, until all input fields have valid values.

This project was fun, challenging and gave me an opportunity to practice a lot of new skills.

## Screenshots

_None available_

## Deployment

```sh
git clone git@github.com:bmilcs/odin-signup-form.git
```
