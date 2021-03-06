//These are the arrays used to store the alphabet, numbers, and special characters. 
//User selection is an array that will be used to concatinate all other arrays based on the users selection.
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var userArray;
// Assignment Code
var generateBtn = document.querySelector("#generate");


//this function displays the password in the textarea password id.  It takes the parameter showPassword and sets it equal to 
//the password id using the textContent method. the showPassword parameter contains the string array called passwordArray.
function displayPassword(showPassword) {
  document.getElementById("password").textContent = showPassword;
}

//This functiontakes input from the user and askes them all the nesscesary questions to generate the password.  
//These questions are set equal to boolean variable confirms that are validated to ensure the user input the correct data.
//each possible case the user could select for their password is covered in the if  if sections from all 4 values to only one.
//these selections are concatinated to the userArray which is passed to a for loop that ranomizes the data in the array and stores 
//it in userSelections.  user  selections is then pushed into the passwordArray using the push method. 
//finally the showpassWord variable stores the password array as a string and is used as an argument for thr displayPassword function.
//showPassword is then returned back into writePassword and strored into the password variable.
function generatePassword() {

  //These are the users choice and the userChoice they can make.
  var userChoice;
  var confirmNumArray;
  var confirmLowerArray;
  var confirmSpecialArray;
  var confirmUpperArray;

  var passwordArray = [];
  var showPassword;

  userChoice = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

  if (!userChoice) {
    alert("You must enter a valid numerical value");
  }

  else if (userChoice < 8 || userChoice > 128) {
    userChoice = parseInt(prompt("You must choose a value between 8 and 128"));
  }

  else{
    confirmNumArray = confirm("would you like numbers in this password?");
    confirmLowerArray = confirm("would you like lower case letters in this password?");
    confirmUpperArray = confirm("would you like upper case letters in this password?");
    confirmSpecialArray = confirm("would you like special characters in this password?");
  };


  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //checks to confim user chooses at least one type
  if (!confirmNumArray && !confirmLowerArray && !confirmUpperArray && !confirmSpecialArray) {
    alert("You must choose a character type to be generated in the passsword!");
  }


  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //local variable passwordArray stores in it random values pulled from randomize() for as long of a password as the user specified.
  
  
  function randomize(){
    var randomIndex;
    var randomEl;
    var chosenIndex = [];
    var passwordIndex;
    var passwordEl;

    if(confirmNumArray){
      randomIndex = Math.floor(Math.random() * numArray.length);
      randomEl = numArray[randomIndex];
      chosenIndex.push(randomEl);
    }

    if(confirmLowerArray){
      randomIndex = Math.floor(Math.random() * lowerArray.length);
      randomEl = lowerArray[randomIndex];
      chosenIndex.push(randomEl);
    }
    
    if(confirmUpperArray){
      randomIndex = Math.floor(Math.random() * upperArray.length);
      randomEl = upperArray[randomIndex];
      chosenIndex.push(randomEl);
    }

    if(confirmSpecialArray){
      randomIndex = Math.floor(Math.random() * specialArray.length);
      randomEl = specialArray[randomIndex];
      chosenIndex.push(randomEl);
    }
    
    //console.log(chosenIndex);
    passwordIndex = Math.floor(Math.random() * chosenIndex.length);
    passwordEl = chosenIndex[passwordIndex];
    //console.log(passwordIndex);
    //console.log(passwordEl);
    return passwordEl;
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  for(passwordArray.length; passwordArray.length < userChoice;){
    passwordArray.push(randomize());
  }  
  //console.log(passwordArray);


  showPassword = passwordArray.join("");
  displayPassword(passwordArray);
  return showPassword;
}


// Write password to the #password input
//stores in password the data returned from generatePassword. passwordText has a reference to the password id and uses 
//the .value method set equal to password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);