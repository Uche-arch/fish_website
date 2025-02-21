// function validate(){
//     let input = document.getElementById("input").value;
//     let error = document.getElementById("error");

//     if(input == ""){
//         error.innerHTML = "Input this field";
//         // error.style.display = "block";
//         // error.style.color = "red";
//     }else {
//         error.innerHTML = null;
//     }
// }

function validate() {
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
//   let option = document.getElementById("option").value;
//   let btn = document.getElementById("btn").value;

  let error1 = document.getElementById("error-1");
  let error2 = document.getElementById("error-2");
  let error3 = document.getElementById("error-3");
  let error4 = document.getElementById("error-4");
  let error5 = document.getElementById("error-5");
//   let error6 = document.getElementById("error-6");
  if (first == "") {
    error1.innerHTML = "Enter Firstname";
  } else if (last == "") {
    error2.innerHTML = "Enter Lastname";
  } else if (email == "") {
    error3.innerHTML = "Input Email";
  } else if (city == "") {
    error4.innerHTML = "Enter City name";
  } else if (option == "") {
    error5.innerHTML = "Pick an option";
  }
  else {
    return true
  }
}

// error6.innerHTML = "Fix all errors";
