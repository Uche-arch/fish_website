let firstError = document.getElementById("first-error");
let lastError = document.getElementById("last-error");
let emailError = document.getElementById("email-error");
let cityError = document.getElementById("city-error");
let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");

function validate() {
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let city = document.getElementById("city").value;

  if (first == "") {
    firstError.innerHTML = "Input Firstname";
  } else {
    firstError.innerHTML = "";
  }
  if (last == "") {
    lastError.innerHTML = "Input lastname";
  } else {
    lastError.innerHTML = "";
  }
  if (email == "") {
    emailError.innerHTML = "Input Email";
  } else if (!emailPattern.test(email)) {
    emailError.innerHTML = "Enter a valid email address";
  } else {
    emailError.innerHTML = "";
  }
  if (city == "") {
    cityError.innerHTML = "Input City name";
  } else {
    cityError.innerHTML = "";
  }
  if (first || last || email || city == "") {
    submitError.innerHTML = "Please fill out all required fields";
  } else {
    submitError.innerHTML = "";
  }
  setTimeout(() => {
    submitError.style.display = "none";
  }, 3000);
}

function validatePhone (){
  let phone = document.getElementById("phone").value;
  if (phone.length !== 11) {
    phoneError.innerHTML = "Enter valid phone number of 11 digits";
    return false
  }if (phone.length == 11){
    phoneError.innerHTML = "valid phone number"
  }
  //  else {
  //   phoneError.innerHTML = "";
  // }
}
