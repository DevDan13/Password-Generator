# Password-Generator

## Met Requirements

* This program generates a password when the user clicks the generate password button.
    * An event listener is used to make the button responsive.
    * when clicked the button calls the **writePassword** function.
    * The **writePassword** function calls the **generatePassword** function which generates the password and returns it.

* The **generatePassword** function accounts for the aasignment's requirements as follows:

    * Ask the user a series of questions
    * length of password (numeric input)
    * validate length is between 8 and 128.
    * type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
    * Validate the user selected at least one character type.
    * Any invalid response will terminate password generation and the user must start over.

* The **randomize** function is called in the for loop of the **generatePassword** function which starts *passwordArray.length* at 0 and will continue until
    *passwordArray.length* is less than the users password number input. for as long as this for loop runs it will return a value from the **randomize** function
    and push it into the *passwordArray*.

* The **randomize** function checks to see which types were entered.  it then uses **math.random** to pull a random index and store it in *randomEl*.  *randomEl* is
    pushed into the *chosenIndex* array. This array's indexes are then randomized and set equal *passwordIndex* and then stored in *passswordEl*.  *PasswordEl* is returned to be pushed to *passwordArray** until the length of the array equals the users desired length.

* The **displayPassword** function is called in **generatePassword** and it displays the password in the box and goes back to **generatePassword**  

* the **writePassword** function then takes the value returned by **generatePassword** and stores it in password which is 
    written into the passwordText variable.  The .value method is then used on the passwordText variable and set equal to password.
    