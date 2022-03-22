// Arrays for characters included in the password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"]; 
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSp;
var confirmNum;
var confirmLower;
var confirmUpper;

function generatePrompt() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  
  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("Password length must be between 7-128 characters. Try again");
    var confirmLength = (prompt("How many characters would yo like your password to contain?"));
  }

  alert('Your password will have' + confirmLength + ' characters');

  var confirmSp = confirm("Click OK to confirm you would like to include special characters");
  var confirmNum = confirm("Click OK to confirm you would like to include numbers");
  var confirmLower = confirm("Click OK to confirm you would like to include lower case letters");
  var confirmUpper = confirm("Click OK to confirm you would like to include upper case letters");

  while(confirmUpper === false && confirmLower === false && confirmSp === false && confirmNum === false) {
    alert("You must choose at least one parameter");
  }
    return generatePrompt();
  }

  var passwordCharacters = []

  if (confirmSp) {
     passwordCharacters = passwordCharacters.concat(specialCharacter)
  }

  if (confirmNum) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmLower) {
    passwordCharacters = passwordCharacters.concat(alphabetLower)
  }

  if (confirmUpper) {
    passwordCharacters = passwordCharacters.concat(alphabetUpper)
  }

  console.log(passwordCharacters)

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
  }
  return randomPassword;
};
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