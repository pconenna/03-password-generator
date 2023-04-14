// Assignment Code
var generateBtn = document.querySelector("#generate"); //the button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //this has to be a string
  var passwordText = document.querySelector("#password"); //the output textarea

  passwordText.value = password;

}
// first thing to do would be to contain all the possible characters to make a password
// so thats both cases of letter and special chars oh and numbers
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbers = ['0', '1', '2', '3','4','5','6','7','8','9',]


var specialChars = [" ", "!", '"', "#", "$", "%", "^", "&", "*", "(", ")", "+", 
"-", ",", ".", "/", ":", ";", "'", "=",
"<", ">", "?", "{", "}", "@", "[", "]", "\\", "`", "~", "|"] 

//pw reqs:
//8-128 chars
//ask about char types (numbers, letter cases, and special characters)
// use alerts


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
