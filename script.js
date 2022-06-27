// Assignment Code
var generateBtn = document.querySelector("#generate");
var length; 
var availableCharacters  = []
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
  passwordLength();
}

function passwordLength() {
  length = prompt("How many characters would you like in your password?");

  if(length >=8 &&  length <=128) {
    alert("Great! Password is between 8 and 128 characters. Let's continue!");
    lowerCaseLetters();
  } else {
    alert("Your password length does not fall between 8 and 128 characters. Please try again.");
    startPassword();
  }
}

// else
//   alert("No password length inputed. Please input a desired character length for your password");

function lowerCaseLetters() {

  var lowerCase = confirm("Would you like to use lowercase letters in your password? Select OK for 'Yes' or Cancel for 'No'");


  if(lowerCase) {
    availableCharacters.concat(["abcdefghijklmnopqrstuvwxyz"])
  } 
  upperCaseLetters()
}

function upperCaseLetters() {
  
  var upperCase = confirm("Would you like to use uppercase letters in your password? Select OK for 'Yes' or Cancel for 'No'");

  if(upperCase) {
    availableCharacters.concat(["ABCDEFGHIJKLMOPQRSTUVWXYZ"])
  }
  passwordNumbers()
  }

function passwordNumbers() {
  
  var numbers = confirm("Would you like numbers in your password? Select OK for 'Yes' or Cancel for 'No'");

  if(numbers) {
  availableCharacters.concat([0,1,2,3,4,5,6,7,8,9])
  }
  specialCharacters()
}

function specialCharacters() {
  var special = confirm("Would you like special characters in your password? Select OK for 'Yes' or Cancel for 'No'");

  if(special) {
  availableCharacters.concat(["!@#$%^&*+(),./?><{}[]`~-_=|:;'"])
  }
  // writePassword()
}


// var generatePassword

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// for (i = 0; i<length; i++) {
//   password += avaMath.floor(Math.random)
// }
