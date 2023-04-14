// Assignment Code
var generateBtn = document.querySelector("#generate"); //the button

// first thing to do would be to contain all the possible characters to make a password
// so thats both cases of letter and special chars oh and numbers
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ['0', '1', '2', '3','4','5','6','7','8','9',]


var specialChars = [" ", "!", '"', "#", "$", "%", "^", "&", "*", "(", ")", "+", 
"-", ",", ".", "/", ":", ";", "'", "=",
"<", ">", "?", "{", "}", "@", "[", "]", "\\", "`", "~", "|"] 

var numchars = 0;
var hasLowerCase = false;
var hasUpperCase = false;
var hasNumbers = false;
var hasSpecialChars = false;


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //need to write this
  //this has to be a string
  var passwordText = document.querySelector("#password"); //the output textarea

  passwordText.value = password;

}
//doing this all in one function is kind of ugly
function gatherRequirements(){
  //make it impossible to mark no for every choice 
  numchars = window.prompt("Choose an amount of characters between 8 and 128.");
  while(numchars < 8 || numchars > 128){
    numchars = window.prompt("Please try again the value must be between 8 and 128.");
  }

  //this should make it impossible to generate a password after marking no for every choice
  while(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialChars){
    hasLowerCase = window.confirm("Do you want to use lowercase letters?");
  
    hasUpperCase = window.confirm("Do you want to use uppercase letters?");

    hasNumbers = window.confirm("do you want to use numbers?");

    hasSpecialChars = window.confirm("Do you want to use special characters")

  }
  

} 

function generatePassword(){
  gatherRequirements();
  var pw = "";
  var charPool = [];
  
  if(hasLowerCase){charPool = charPool.concat(lowerCase)}
  if(hasUpperCase){charPool = charPool.concat(upperCase)}
  if(hasNumbers){charPool = charPool.concat(numbers)}
  if(hasSpecialChars){charPool = charPool.concat(specialChars)}
  console.log(charPool)
  for(var i = 0; i < numchars; i++){
    var randomIndex = Math.floor(Math.random()*charPool.length);
    var c = charPool[randomIndex]; 
    pw += c;
  }
  console.log(pw);
  console.log(pw.length);
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
