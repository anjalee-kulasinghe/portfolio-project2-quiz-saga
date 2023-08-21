// Adding questions and answers
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
]; //array end here
// --------------------------------------------------------------------------------------------------------------------------

let quizElement = document.getElementById("question");
let answerElements = document.getElementById("quizAnswers");
let nextButton = document.getElementById("btnNext");

let scoreText = document.querySelector("#score");
let progressBarFull = document.querySelector("#progressBarFull");

/* variables to store the question index and the score */
let currentQuestionIndex = 0;
let score = 0;

/**
 * Start of the quiz.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
/**
 * Take the question and the answer from the questions array and give a nuber to the question.
 */
function  showQuestion() {
    resetState(); 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    quizElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("gameAnswer");
        quizAnswers.appendChild(button);

        /* assign the true or false */
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

        progressText.innerHTML = `Question ${questionNumber} of ${questions.length}`;
        progressBarFull.style.width = `${(questionNumber/questions.length) * 100}%`
    });
}

/**
*re-set the answers area
*/
function resetState() {
    nextButton.style.display = "none";
    while(answerElements.firstChild)
    {
        answerElements.removeChild(answerElements.firstChild);
    }
}

/**
 * select the correct answer
 */
function selectAnswer(e){
    let selectedAnswer = e.target;
    let isCorrect = selectedAnswer.dataset.correct === "true";
    if(isCorrect){
        selectedAnswer.classList.add("correct");
        score ++;
        scoreText.innerHTML = score;
    } else {
        selectedAnswer.classList.add("incorrect");
    }

    /* let the user allow only to select one answer. if the answer is incorrect highligt the correct answer*/
    Array.from(answerElements.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; //disable selecting another answer
    });
    
    /* let the next button appear to the user */
    nextButton.style.display = "block";
}

/**
 * check whether there is a next question 
 * if not display the score of the user
 */
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/**
 * will display the final score of the user
 */
function showScore(){
    resetState();
    quizElement.innerHTML = `You have scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Home Page";
    nextButton.style.display = "block";

    nextButton.addEventListener("click", function() {
        // Redirect the user to the home page
        window.location.assign("index.html");
    });
}

/* Define the next button actions */
function handleQuizAction() {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
}

nextButton.addEventListener("click", handleQuizAction);

document.addEventListener("keydown", function(event) {
    // Check if the pressed key is the Enter key
    if (event.key === "Enter") {
        handleQuizAction();
    }
});
startQuiz();


// End page

// let userName = document.querySelector("#userName");
// let saveScore = document.querySelector("#saveScore");
// let finalScore = document.querySelector("#finalScore");



/* ------------------------------------------------------------------------*/
