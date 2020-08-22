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
  values.includeUpper = confirm("Any uppercase letters?");
  values.includeLower = confirm("Any lowercase letters?");
  values.includeNumber = confirm("Any numbers in your password?");
  values.includeSpecial = confirm("any special characters?");
}

console.log(values.charLength);
console.log(values.includeUpper);
console.log(values.includeLower);
console.log(values.includeNumber);
console.log(values.includeSpecial);


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
  console.log(i);
}


