// Perform event listener separate from on submit done by button click
document.getElementById("firstName").addEventListener("change", checkLength);
document.getElementById("lastName").addEventListener("change", checkLength);
document.getElementById("facilitator").addEventListener("change", checkLength);

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var facilitator = document.getElementById("facilitator");

var fNameError = document.getElementById("fNameError");
var lNameError = document.getElementById("lNameError");
var facilitatorError = document.getElementById("facilitatorError");

function checkLength() {

  if (firstName.value.length < 2) {
    firstName.focus();
    firstName.className = "invalid";
    isValid = false;
    fNameError.innerHTML = "First name length can not be below 2 characters";
    event.preventDefault();
  } else {
    firstName.className = "valid";
    fNameError.innerHTML = "";
    firstName.innerHTML = "";
  }

  if (lastName.value.length < 2) {
    lastName.focus();
    lastName.className = "invalid";
    lNameError.innerHTML = "Last name length can not be below 2 characters";
    isValid = false;
    event.preventDefault();
  } else {
    lastName.className = "valid";
    lastName.innerHTML = "";
    lNameError.innerHTML = "";
  }

  if (facilitator.value.length < 2) {
    facilitator.focus();
    facilitator.className = "invalid";
    isValid = false;
    event.preventDefault();
  } else {
    facilitator.className = "valid";
    facilitator.innerHTML = "";
    facilitatorError.innerHTML = "";
  }
}

// Regular expression that matches only alphabet characters.
var expression = /^[A-Za-z]+$/;

// On key press will check the value of pressed for the first name text box.
// If no error, then style will be removed from the error span
function fNameCharCheck(key) {
  var keyCode = key.keyCode || key.which;
  fNameError.innerHTML = "";
  var firstName = document.getElementById("firstName");
  firstName.className = "";

  var isValid = expression.test(String.fromCharCode(keyCode));
  if (!isValid) {
    fNameError.innerHTML = "Only Alpha characters are allowed.";
    firstName.className = "invalid";
  }

  return isValid;
}

// On key press will check the value of pressed for the last name text box.
// If no error, then style will be removed from the error span
function lNameCharCheck(key) {
  var keyCode = key.keyCode || key.which;
  lNameError.innerHTML = "";
  var lastName = document.getElementById("lastName");
  lastName.className = "";

  var isValid = expression.test(String.fromCharCode(keyCode));
  if (!isValid) {
    lNameError.innerHTML = "Only Alpha characters are allowed.";
    lastName.className = "invalid";
  }

  return isValid;
}

// array of facilitator names that is possible to be submitted by the user
var names = ["FAZIL", "CHRIS", "JOSH", "LAURA", "HARSH"]

// Check the entered name against the array of names for the facilitator
function validateFacilitator(name) {
  return name == document.getElementById("facilitator").value.toUpperCase();
}

// Submit action validation for the form. Validate length of text fields
function validateForm() {
  var isValid = true;

  if (firstName.value.length < 2) {
    firstName.focus();
    firstName.className = "invalid";
    fNameError.innerHTML = "First name length can not be below 2 characters";
    isValid = false;
  } else {
    firstName.className = "valid";
    fNameError.innerHTML = "";
    firstName.innerHTML = "";
  }

  if (lastName.value.length < 2) {
    lastName.focus();
    lNameError.innerHTML = "Last name length can not be below 2 characters";
    isValid = false;
  } else {
    lastName.className = "valid";
    lNameError.innerHTML = "";
    lastName.innerHTML = "";
  }

  if (facilitator.value.length < 2) {
    facilitator.focus();
    isValid = false;
  }

  // Compare value of facilitator text input to array of facilitators and update textbox and error html
  if (!(document.getElementById("facilitator").innerHTML = names.some(validateFacilitator))) {
    facilitator.focus();
    facilitator.className = "invalid";
    facilitatorError.innerHTML = "Unknown facilitator.";
    isValid = false;
  } else {
    facilitator.className = "valid";
    facilitatorError.innerHTML = "";
  }

  // If there is an error with any of the text fields, then return that at least one field is invalid
  if (!isValid) {
    return false;
  }

}