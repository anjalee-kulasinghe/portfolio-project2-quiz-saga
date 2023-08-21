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
    duration == 10;
})
 /* let the score added. Each correct question get 20 marks*/
quizAnswer.forEach(function(quizAnswerSingle){
    quizAnswerSingle.addEventListener("click", function(){
        setTimeout(function(){
            quizStep(); 
            duration == 10;
        },500)

        let valid = this.getAttribute("valid");
        if(valid === "valid") {
            scoreCount += 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    })
});
/**
 * let the skip button works
 */
function quizStep() {
    count += 1;
    for(let i = 0; i < quizQuestion.length; i++) {
        quizQuestion[i].className = "quizQuestion";
    }

    quizQuestion[count].className = "quizQuestion active";
    if(count == 5) {
        skip.style.display = "none";
        clearInterval(timeDuration);
        countdown.innerHTML = 0;
    }
}

/* set the timer in the quiz window */
let timeDuration = setInterval(function(){
    if(duration == 10) {
        duration = 0;
    }

    duration += 1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML == "10") {
        quizStep();
    }
},1000);