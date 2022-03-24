var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Assignment code here
function generatePassword () {
  var confirmLength = prompt("How many characters would you like your password to have?");

  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password must contain between 8-128 characters. Try Again.");
    var confirmLength = prompt("How many characters would you like your password to have?");
  }

  alert("Your password will contain " + confirmLength + " characters.")

  var confirmSpecialCharacter = confirm("Click OK to confrim that you would like your password to contain special characters.");
  var confirmNumericCharacter = confirm("Click OK to comfirm that you would like your password to contain numbers.");
  var confirmUpperCase = confirm("Click OK to comfirm that you would like your password to contain upper case letters.");
  var confirmLowerCase = confirm("Click OK to comfirm that you would like your password to contain lower case letters.");

  while(confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmUpperCase === false && confirmLowerCase === false) {
    alert("You must choose at least one parameter")
    var confirmSpecialCharacter = confirm("Click OK to confrim that you would like your password to contain special characters.");
    var confirmNumericCharacter = confirm("Click OK to comfirm that you would like your password to contain numbers.");
    var confirmUpperCase = confirm("Click OK to comfirm that you would like your password to contain upper case letters.");
    var confirmLowerCase = confirm("Click OK to comfirm that you would like your password to contain lower case letters.");
  }

  var passwordCharacters = []

  if(confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if(confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if(confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  if(confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  var randomPassword = "";

  for(var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);