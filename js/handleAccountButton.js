const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");

function handleSignInButton() {
  location.href = "../html/loginPage.html";
}

function handleSignUpButton() {
  location.href = "../html/signupPage.html";
}

signInButton.addEventListener("click", handleSignInButton);
signUpButton.addEventListener("click", handleSignUpButton)
