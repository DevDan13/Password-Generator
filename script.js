//vars here

//These are the users choice and the choices they can make.
var userChoice;
var confirmNumArray;
var confirmLowerArray;
var confirmSpecialArray;
var confirmUpperArray;

//These are the arrays used to store the alphabet, numbers, and special characters 
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

//make upper case array? Remove if neccessary.


// Assignment Code
var generateBtn = document.querySelector("#generate");


// ask user questions for which characters on the keyboard to use to generate a passsword.
function generatePassword() {
  userChoice = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

  if (!userChoice) {
    alert("You must enter a valid numerical value");
  }
  else if (userChoice < 8 || userChoice > 128) {
    userChoice = parseInt(prompt("You must choose a value between 8 and 128"));
  }
  else {
    confirmNumArray = confirm("would you like numbers in this password?");
    confirmSpecialArray = confirm("would you like special characters in this password?");
    confirmLowerArray = confirm("would you like lower case letters in this password?");
    confirmUpperArray = confirm("would you like upper case letters in this password?");
  };

  if (!confirmNumArray && !confirmSpecialArray && !confirmLowerArray && !confirmUpperArray) {
    choices = alert("You must choose a criteria!");
    
}
}
//if(user wants numbers is true)
//pass array as a paramater to a function I make that pushes the array to a new array of any and all character types. ex userArray.

//this function converts to upper case characters to avoid needing an entire upper case array.
var upperCase = function (u) {
  return u.toUpperCase();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generate each time button is clicked?
generateBtn.addEventListener("click", writePassword);


