const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");

const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
element.addEventListener("click", myFunction);

function myFunction() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  //To check values not empty
  if (email.value == "" || password.value == "") {
    return Swal.fire("Error!", "All Fields are Required!", "error");
  }

  //login
  if (email.value == "admin@gmail.com") {
    if (password.value == "qawsed") {
      return Swal.fire(
        "Successfully!",
        "You Successfully Signed In",
        "success"
      );
    }
    return Swal.fire("Error!", "Password is Wrong", "error");
  } else {
    //console.log("err");
    Swal.fire("Error!", "Please Check Email and Password!", "error");
  }
}

function s() {
  console.log("hi");
  Swal.fire("Error!", "All Fields are Required!", "error");
}
