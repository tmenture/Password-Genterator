// These variables represent strings of data for future reference in the generatePassword function
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// These variables are declarations for the confirm prompts 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// This is the main function
function generatePassword () {
  
  // Prompts the user to pick their passwords length
  var confirmLength = prompt("How many characters would you like your password to have?");

  // Loops prompt if the user doesnt pick a number between 8 and 128
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password must contain between 8-128 characters. Try Again.");
    var confirmLength = prompt("How many characters would you like your password to have?");
  }

  // Informs user of their password length
  alert("Your password will contain " + confirmLength + " characters.")

  // Asks the user to confrim the types of characters they would like their password to contain
  var confirmSpecialCharacter = confirm("Click OK to confrim that you would like your password to contain special characters.");
  var confirmNumericCharacter = confirm("Click OK to comfirm that you would like your password to contain numbers.");
  var confirmUpperCase = confirm("Click OK to comfirm that you would like your password to contain upper case letters.");
  var confirmLowerCase = confirm("Click OK to comfirm that you would like your password to contain lower case letters.");

  // Loops confirm promts if no parameters are set by the user
  while(confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmUpperCase === false && confirmLowerCase === false) {
    alert("You must choose at least one parameter. Try Again.")
    var confirmSpecialCharacter = confirm("Click OK to confrim that you would like your password to contain special characters.");
    var confirmNumericCharacter = confirm("Click OK to comfirm that you would like your password to contain numbers.");
    var confirmUpperCase = confirm("Click OK to comfirm that you would like your password to contain upper case letters.");
    var confirmLowerCase = confirm("Click OK to comfirm that you would like your password to contain lower case letters.");
  }

  // For assigning action to the password parameters
  var passwordCharacters = []

  // If user confrims the use of special characters merge specialChar array data to passwordCharacters array
  if(confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  // If user confrims the use of numerical characters merge number array data to passwordCharacters array
  if(confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  // If user confrims the use of upper case letters merge alphaUpper array data to passwordCharacters array
  if(confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  // If user confrims the use of lower case letters merge alphaLower array data to passwordCharacters array
  if(confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  // Empty string for the merged passwordCharacters array filled based on for loop random character selection 
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