// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var values = {
  charLength: 8,
  includeUpper: true,
  includeLower: true,
  includeNumber: true,
  includeSpecial: true,
}

function generatePassword() {
  values.charLength = parseInt(prompt("How many characters do you want your password to be?"));
  if ( isNaN(values.charLength) || values.charLength<8 || values.charLength>128) {
    alert("please enter a valid number between 8 and 128.");
    return;
  }
  values.includeUpper = confirm("Any uppercase letters?");
  values.includeLower = confirm("Any lowercase letters?");
  values.includeNumber = confirm("Any numbers in your password?");
  values.includeSpecial = confirm("any special characters?");

  var upperOP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerOP = "abcdefghijklmnopqrstuvwxyz"
  var numberOP = "0123456789"
  var specialOP = "!@#$%^&*<>?+_~"

  var importantCharacters = [];

  if (values.includeUpper) {
    importantCharacters = importantCharacters.concat(upperOP.split(""));
  }

  if (values.includeLower) {
    importantCharacters = importantCharacters.concat(lowerOP.split(""));
  }

  if (values.includeNumber) {
    importantCharacters = importantCharacters.concat(numberOP.split(""));
  }

  if (values.includeSpecial) {
    importantCharacters = importantCharacters.concat(specialOP.split(""));
  }

  console.log(importantCharacters);
  console.log(values.charLength);
  var passwordText = "";

  for (var i = 0; i < values.charLength; i++) {
   var randIndex = Math.floor(Math.random() * importantCharacters.length);
   console.log(importantCharacters[randIndex]); 
   passwordText += importantCharacters[randIndex];
  }
  return passwordText;

}
