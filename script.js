// Assignment Code
var generateBtn = document.querySelector("#generate");
//vars here
var numArray = ["0","1","2","3","4","5","6","7","8","9"];
var charArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialArray = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];

//start with arrays for chars?
//array for num,alphabet,special chars, capital alphabet.  
//alphabet array

// ask user ?'s

//if(user wants numbers is true)
//pass array as a paramater to a function I make that pushes the array to a new array of any and all character types. ex userArray.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generate each time button is clicked?
generateBtn.addEventListener("click", writePassword); 
