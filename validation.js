// To disable the form from submitting
const form = document.querySelector("form");
// To display the error message
const errorDiv = document.querySelector("#show-error");
// To validate the email
const email = document.querySelector("#email");
// To validate the password
const password = document.querySelector("#password");

/*** If register page ***/
// To validate username
const username = document.querySelector("#username");
// To validate repeated password
const secondPassword = document.querySelector("#secondPassword");

form.addEventListener("submit", error => {
    let incorrectInput = "";

    /***  Validations  ***/

    /* Username validations */
    const usernameIncludesDigit = /\d/.test(username.value);

    if (email === "")
    {
        incorrectInput += "Email cannot be empty";
    }
    if (!usernameIncludesDigit) {
        incorrectInput += "Username must include at least one digit.\n";
    }

    /* Password validations */

    const badPasswordLength =
        password.value.length < 8 || password.value.length > 20;

    if (badPasswordLength) {
        incorrectInput +=
            " The password should be within 8 to 20 characters.\n";
    }

    const passwordIncludesUppercase = /[a-z]/.test(password.value);

    if (!passwordIncludesUppercase) {
        incorrectInput +=
            " The password should contain at least one uppercase character.\n";
    }

    if (password.value !== secondPassword.value) {
        incorrectInput += "The passwords do not match.\n";
    }

    // Finished validating now show error message
    if (incorrectInput !== "") {
        // Change the error div tag to display the error message(s)
        errorDiv.innerText = incorrectInput;
        // Change the color of the text to red
        errorDiv.style.color = "red";
        // Prevent the form button from submitting again, before fixing the issues
        error.preventDefault();
    }
});