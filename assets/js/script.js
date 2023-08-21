// Welcome message to the user with the username has entered by the user

let userName = document.querySelector("#userName");
let headingText = document.querySelector("#headingText");
let userPage = document.querySelector("#userPage");
/**
 * Welcome message with the username user has enetered
 */
function greetings() {
    headingText.innerHTML = "";
    headingText.innerHTML = "Hello " + userName.value + ". Select the quize that you would like to play.";
    userPage.style.display = "none";
}

/* Quiz Score */
let skip = document.getElementById("skip");
let score = document.getElementById("score");
let totalScore = document.getElementById("totalScore");
let countdown = document.getElementById("countdown");

let count = 0;
let scoreCount = 0;
let duration = 0;

let quizQuestion = document.querySelectorAll(".quizQuestion");
let quizAnswer = document.querySelectorAll(".quizQuestion .quizAnswer input");

skip.addEventListener("click", function(){
    quizStep();
})

function quizStep() {
    count += 1;
    for(i = 0; i < quizQuestion.length; i++) {
        quizQuestion[i].className = "quizQuestion";
    }

    quizQuestion[i].className = "quizQuestion active";
    if(count == 5) {
        skip.style.display = "none";
    }
}