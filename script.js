//vars here

//These are the users choice and the userChoice they can make.
var userChoice;
var confirmNumArray;
var confirmLowerArray;
var confirmSpecialArray;
var confirmUpperArray;

//These are the arrays used to store the alphabet, numbers, and special characters. 
//User selection is an array that will be used to concatinate all other arrays based on the users selection.
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var userArray;

//make upper case array? Remove if neccessary.


// Assignment Code
var generateBtn = document.querySelector("#generate");


function displayPassword(showPassword) {
  document.getElementById("password").textContent = showPassword;
}

// ask user questions for which characters on the keyboard to use to generate a passsword.
//is there a more DRY way to complete the task of this function?
function generatePassword() {
  
  var passwordArray = [];
  var showPassword;

  userChoice = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

  if (!userChoice) {
    alert("You must enter a valid numerical value");
  }

  else if (userChoice < 8 || userChoice > 128) {
    userChoice = parseInt(prompt("You must choose a value between 8 and 128"));
  }

  else {
    confirmNumArray = confirm("would you like numbers in this password?");
    confirmLowerArray = confirm("would you like lower case letters in this password?");
    confirmUpperArray = confirm("would you like upper case letters in this password?");
    confirmSpecialArray = confirm("would you like special characters in this password?");
  };


  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //checks to confim user chooses at least one type
  if (!confirmNumArray && !confirmLowerArray && !confirmUpperArray && !confirmSpecialArray) {
    userArray = alert("You must choose a character type to be generated in the passsword!");
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //4 true selections
  else if (confirmNumArray && confirmLowerArray && confirmUpperArray && confirmSpecialArray) {

    userArray = numArray.concat(lowerArray, upperArray, specialArray);
  }


  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //all cases for 3 true selections
  else if (confirmNumArray && confirmLowerArray && confirmUpperArray) {
    userArray = numArray.concat(lowerArray, upperArray);
  }

  else if (confirmNumArray && confirmLowerArray && confirmSpecialArray) {
    userArray = numArray.concat(lowerArray, specialArray);
  }

  else if (confirmNumArray && confirmUpperArray && confirmSpecialArray) {
    userArray = numArray.concat(upperArray, specialArray);
  }

  else if (confirmLowerArray && confirmUpperArray && confirmSpecialArray) {
    userArray = lowerArray.concat(upperArray, specialArray);
  }


  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //all cases for 2 true selections
  else if (confirmNumArray && confirmLowerArray) {
    userArray = numArray.concat(lowerArray);
  } 

  else if (confirmNumArray && confirmUpperArray) {
    userArray = numArray.concat(upperArray);
  } 
  else if (confirmNumArray && confirmSpecialArray) {
    userArray = numArray.concat(specialArray);
  }

  else if (confirmLowerArray && confirmUpperArray) {
    userArray = lowerArray.concat(upperArray);
  } 

  else if (confirmLowerArray && confirmSpecialArray) {
    userArray = lowerArray.concat(specialArray);
  } 

  else if (confirmUpperArray && confirmSpecialArray) {
    userArray = upperArray.concat(specialArray);
  }


  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //all cases for 1 true selection
  else if (confirmNumArray) {
    userArray = numArray;
  }

  else if (confirmLowerArray) {
    userArray = lowerArray;
  }

  else if (confirmUpperArray) {
    userArray = upperArray;
  }

  else if (confirmSpecialArray) {
    userArray = specialArray;
  };


  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //local variable passwordArray stores in it random values pulled from the userArray for as long of a password as the user specified.
  for(var i = 0; i<userChoice; i++){
    var userSelections = userArray[Math.floor(Math.random() * userArray.length)];
    passwordArray.push(userSelections);
  }  


  showPassword = passwordArray.join("");
  displayPassword(passwordArray);
  return showPassword;
}
//if(user wants numbers is true)
//pass array as a paramater to a function I make that pushes the array to a new array of any and all character types. ex userArray.


//need a function to use the password value in.
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//mess around with order of the code? currently works as is.
generateBtn.addEventListener("click", writePassword);

