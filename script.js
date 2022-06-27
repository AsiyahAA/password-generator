// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add listener to generate button
generateBtn.addEventListener("click", startPassword);

function startPassword() {
  alert("Password must be at least 8 characters long but no more than 128 characters. Select OK to continue", "OK");
}

var passwordLength
generateBtn.addEventListener("click", passwordLength);

function passwordLength() {
  prompt("How many characters would you like in your password?");
}

var lowerCaseLetters
generateBtn.addEventListener("click", lowerCaseLetters);

function lowerCaseLetters() {
  confirm("Would you like to use lowercase letters in your password? Select OK for 'Yes' or Cancel for 'No'");
}

var upperCaseLetters
generateBtn.addEventListener("click", upperCaseLetters);

function upperCaseLetters() {
  confirm("Would you like to use uppercase letters in your password? Select OK for 'Yes' or Cancel for 'No'");
}

var passwordNumbers
generateBtn.addEventListener("click", passwordNumbers);

function passwordNumbers() {
  confirm("Would you like numbers in your password? Select OK for 'Yes' or Cancel for 'No'");
}

var specialCharacters
generateBtn.addEventListener("click", specialCharacters);

function specialCharacters() {
  confirm("Would you like special characters in your password? Select OK for 'Yes' or Cancel for 'No'");
}

var passwordTime
generateBtn.addEventListener("click", passwordTime);

function passwordTime() {
  alert("Generate password?");
}


