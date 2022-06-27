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

if(passwordLength >8 && passwordLength ==8 && passwordLength <128 && passwordLength ==128) {
  alert("Great! Password is between 8 and 128 characters. Let's continue!");
}

else if(passwordLength <8 && passwordLength >128) {
  alert("Your password length does not fall between 8 and 128 characters. Please try again.");
}

// else
//   alert("No password length inputed. Please input a desired character length for your password");

var lowerCaseLetters
generateBtn.addEventListener("click", lowerCaseLetters);

function lowerCaseLetters() {
  confirm("Would you like to use lowercase letters in your password? Select OK for 'Yes' or Cancel for 'No'");
}

if(lowerCaseLetters == 'OK') {
  alert("You have selected to include lowercase letters in your password")
}

else if(lowerCaseLetters == 'Cancel') {
  alert("You have selected not to include lowercase letters in your password")
}

var upperCaseLetters
generateBtn.addEventListener("click", upperCaseLetters);

function upperCaseLetters() {
  confirm("Would you like to use uppercase letters in your password? Select OK for 'Yes' or Cancel for 'No'");
}

if(upperCaseLetters == 'OK') {
  alert("You have selected to include uppercase letters in your password")
}

else if(upperCaseLetters == 'Cancel') {
  alert("You have selected not to include uppercase letters in your password")
}

var passwordNumbers
generateBtn.addEventListener("click", passwordNumbers);

function passwordNumbers() {
  confirm("Would you like numbers in your password? Select OK for 'Yes' or Cancel for 'No'");
}

if(passwordNumbers == 'OK') {
  alert("You have selected to include numbers in your password")
}

else if(passwordNumbers == 'Cancel') {
  alert("You have selected not to include numbers in your password")
}

var specialCharacters
generateBtn.addEventListener("click", specialCharacters);

function specialCharacters() {
  confirm("Would you like special characters in your password? Select OK for 'Yes' or Cancel for 'No'");
}

if(specialCharacters == 'OK') {
  alert("You have selected to include special characters in your password")
}

else if(specialCharacters == 'Cancel') {
  alert("You have selected not to include special characters in your password")
}

// var generatePassword

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
