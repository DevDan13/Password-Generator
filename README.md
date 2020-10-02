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

* The **displayPassword** function is called in **generatePassword** and it displays the password in the box and goes back to **generatePassword**  

* the **writePassword** function then takes the value returned by **generatePassword** and stores it in password which is 
    written into the passwordText variable.  The .value method is then used on the passwordText variable and set equal to password.
    