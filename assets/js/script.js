let userName = document.querySelector("#userName");
let headingText = document.querySelector("#headingText");
let userPage = document.querySelector("#userPage");
let submitButton = document.querySelector("#userName");

/**
 * Welcome message with the username user has enetered
 */
function greetings() {
    headingText.innerHTML = "";
    headingText.innerHTML = "Hello " + userName.value + ".<br><br>" +
    "Select the 'Start the quiz' to play the quiz.<br>" +
    "Click the 'How to Play' to read the instructions.";
    headingText.style.textAlign = "center";
    userPage.style.display = "none";

    // Disable the submit button
    submitButton.disabled = true;

    // Display the hidden buttons
    let startButton = document.querySelector('a[href="game.html"]');
    let howToPlayButton = document.getElementById("myBtn");
    startButton.removeAttribute("hidden");
    howToPlayButton.removeAttribute("hidden");
}

/**
 * Will display an error message to the user if they are trying to click the submit button
 * without giving a user name
 */
function validateAndSubmit() {
    let userNameInput = document.getElementById("userName");
    let errorMessage = document.getElementById("error-message");

    if (userNameInput.value.trim() === "") {
        errorMessage.textContent = "Please enter a username.";
    } else {
        // Clear any previous error message
        errorMessage.textContent = "";

        // Enable the submit button
        submitButton.disabled = false;

        greetings();
    }
}

//Code for the Modal
document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});