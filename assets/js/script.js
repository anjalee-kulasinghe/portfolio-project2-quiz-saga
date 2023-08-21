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

/* Adding questions and answers */
let questions = [
    /* question 1 */
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            {text: "Mercury", correct:true},
            {text: "Jupiter", correct:false},
            {text: "Earth", correct:false},
            {text: "Mars", correct:false},            
        ]
    },
    /* question 2 */
    {
        question: "From what grain is the Japanese spirit Sake made?",
        answers: [
            {text: "Barley", correct:false},
            {text: "Couscous", correct:false},
            {text: "Rice", correct:true},
            {text: "Bulgur wheat", correct:false},            
        ]
    },
    /* question 3 */
    {
        question: "What is the capital of New Zealand?",
        answers: [
            {text: "Auckland", correct:false},
            {text: "Wellington", correct:true},
            {text: "Queenstown", correct:false},
            {text: "Christchurch", correct:false},            
        ]
    },
    /* question 4 */
    {
        question: "What element is denoted by the chemical symbol Sn in the periodic table?",
        answers: [
            {text: "Nickel", correct:false},
            {text: "Antimony", correct:false},
            {text: "Silicon", correct:false},
            {text: "Tin", correct:true},            
        ]
    },
    /* question 5 */
    {
        question: "What was the most popular girls name in the UK in 2021?",
        answers: [
            {text: "Olivia", correct:true},
            {text: "Emily", correct:false},
            {text: "Isabella", correct:false},
            {text: "Lily", correct:false},            
        ]
    }
];

let quizElement = document.getElementById("question");
let answerElements = document.getElementById("quizAnswers");
let nextButton = document.getElementById("btnNext");

/* variables to store the question index and the score */
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
