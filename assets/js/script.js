let userNameInput = document.getElementById("user-name");
let headingText = document.querySelector("#heading-text");
let userPage = document.querySelector("#user-page");

/**
 * Welcome message with the username player has enetered
 */
function greetings() {
    headingText.innerHTML = "";
    headingText.innerHTML = "Hello " + userNameInput.value + "<br>" +
        "Are you ready...... ";
    headingText.style.textAlign = "center";
    userPage.style.display = "none";

    // Save the username to localStorage
    localStorage.setItem("username", userNameInput.value);

    // Disable the submit button
    userNameInput.disabled = true;

    // Display the hidden buttons
    let startButton = document.querySelector('a[href="game.html"]');
    let howToPlayButton = document.getElementById("my-button");
    startButton.removeAttribute("hidden");
    howToPlayButton.removeAttribute("hidden");
}

/**
 * Will display an error message to the player 
 * if they are trying to click the submit button
 * without giving a username
 */
function validateAndSubmit() {
    let errorMessage = document.getElementById("error-message");

    if (userNameInput.value.trim() === "") {
        errorMessage.textContent = "Please enter a username.";
    } else {
        // Clear any previous error message
        errorMessage.textContent = "";

        // Enable the submit button
        userNameInput.disabled = false;

        greetings();
    }
}

// Event listener to the input field for the "Submit" action
userNameInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        validateAndSubmit();
    }
});

// Code for the Modal
document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("my-modal");
    let myButton = document.getElementById("my-button");
    let span = document.getElementsByClassName("close")[0];

    myButton.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

});