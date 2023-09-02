// Adding questions and answers to an array
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
    // ... other questions ...

    /* question 5 */
    {
        question: "What was the most popular girls name in the UK in 2021?",
        answers: [
            {text: "Olivia", correct:true},
            {text: "Emily", correct:false},
            {text: "Isabella", correct:false},
            {text: "Lily", correct:false},            
        ]
    },
    /* question 6 */
    {
        question: "What country has the highest life expectancy?",
        answers: [
            {text: "Japan", correct:false},
            {text: "Hong Kong", correct:true},
            {text: "South Korea", correct:false},
            {text: "China", correct:false},            
        ]
    },

    /* question 7 */
    {
        question: "Who was the Ancient Greek God of the Sun?",
        answers: [
            {text: "Zeus", correct:false},
            {text: "Athena", correct:false},
            {text: "Apollo", correct:true},
            {text: "Artemis", correct:false},            
        ]
    },
    /* question 8 */
    {
        question: "What year was the United Nations established? ",
        answers: [
            {text: "1940", correct:false},
            {text: "1945", correct:true},
            {text: "1948", correct:false},
            {text: "1955", correct:false},            
        ]
    },
    /* question 9 */
    {
        question: "Who has won the most total Academy Awards?",
        answers: [
            {text: "John Ford", correct:false},
            {text: "Alan Menken", correct:false},
            {text: "Katharine Hepburn", correct:false},
            {text: "Walt Disney", correct:true},            
        ]
    },
    /* question 10 */
    {
        question: 'What company was originally called "Cadabra"?',
        answers: [
            {text: "Amazon", correct:true},
            {text: "Walmart", correct:false},
            {text: "Target", correct:false},
            {text: "eBay", correct:false},            
        ]
    },
    /* question 11 */
    {
        question: "How many elements are in the periodic table?",
        answers: [
            {text: "119", correct:false},
            {text: "120", correct:false},
            {text: "116", correct:false},
            {text: "118", correct:true},            
        ]
    },
    /* question 12 */
    {
        question: "How many ghosts chase Pac-Man at the start of each game?",
        answers: [
            {text: "2", correct:false},
            {text: "4", correct:true},
            {text: "6", correct:false},
            {text: "1", correct:false},            
        ]
    },
    /* question 13 */
    {
        question: "What country drinks the most coffee per capita?",
        answers: [
            {text: "Brazil", correct:false},
            {text: "Italy", correct:false},
            {text: "Finland", correct:true},
            {text: "Norway", correct:false},            
        ]
    },
    /* question 14 */
    {
        question: 'What company was initially known as "Blue Ribbon Sports"?',
        answers: [
            {text: "Adidas", correct:false},
            {text: "Puma", correct:false},
            {text: "Reebok", correct:false},
            {text: "Nike", correct:true},            
        ]
    },
    /* question 15 */
    {
        question: "What sports car company manufactures the 911?",
        answers: [
            {text: "Ferrari", correct:false},
            {text: "Lamborghini", correct:false},
            {text: "Porsche", correct:true},
            {text: "McLaren", correct:false},            
        ]
    }
]; // array end here
// --------------------------------------------------------------------------------------------------------------------------

let quizElement = document.getElementById("question");
let answerElements = document.getElementById("quizAnswers");
let nextButton = document.getElementById("btnNext");
let homeButton = document.getElementById("btnHome");

// Separate array to hold selected questions
let selectedQuestions = [];

// Shuffle the questions array to randomize the order
questions = shuffleArray(questions);

//variables for the total score and for the question progress bar
let scoreText = document.querySelector("#score");
let progressBarFull = document.querySelector("#progressBarFull");

//variables to store the question index, score, start timer and the countdown timer
let currentQuestionIndex = 0;
let score = 0;
let timer; // Variable to store the countdown time
let startTime; 

/**
 * Start of the quiz.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    // Take the first 5 questions from the shuffled array
    selectedQuestions = questions.slice(0, 5);

    // Record the start time
    startTime = new Date();

    // Start the timer when the quiz begins
    startTimer(10);

    // Hide the "Go to Start" button initially
    homeButton.style.display = "none";

    showQuestion();
}

/**
 * Take the question and the answer from the questions array and give a nuber to the question.
 */
function  showQuestion() {
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    quizElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    progressText.innerHTML = `Question ${questionNumber} of ${selectedQuestions.length}`;
    progressBarFull.style.width = `${(questionNumber / selectedQuestions.length) * 100}%`

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("gameAnswer");
        answerElements.appendChild(button);

        // assign the true or false
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });

    // Start the timer after the question is displayed
    startTimer(10);
}

/**
* Shuffles the array randomly and  
* give 5 questions to the player
*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
* Re-set the answers area
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

    // Let the layer allow only to select one answer. If the answer is incorrect highligt the correct answer
    Array.from(answerElements.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; //disable selecting another answer
    });
    
    // Next button appear to the player
    nextButton.style.display = "block";

    clearInterval(timer); // Stop the timer after giving an answer
}

/**
 * start the countdown timer
 */
function startTimer(seconds) {
    clearInterval(timer); // Clear any existing timers
    let timeLeft = seconds;
    timer = setInterval(function () {
        // Update the timer display
        document.getElementById("time-left").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer when it reaches 0
            handleNextButton(); // Automatically move to the next question
        }
        timeLeft--;
    }, 1000);
}

/**
 * Display the total time taken to answer the 5 questions.
 */
function displayTotalTimeTaken() {
    // Calculate the time difference
    let endTime = new Date();
    let timeDifference = (endTime - startTime) / 1000;

    // Round up the time to the nearest whole number of seconds
    let roundedTime = Math.ceil(timeDifference);

    // Update the total time taken element
    let totalTimeTakenElement = document.getElementById("totalTimeTaken");
    totalTimeTakenElement.textContent = `You took: ${roundedTime} seconds`;
    totalTimeTakenElement.removeAttribute("hidden");
}

/**
 * Check whether there is a next question 
 * If not display the score of the player
 */
function handleNextButton(){
    clearInterval(timer);
    currentQuestionIndex++;
    if(currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/**
 * will display the final score and the total time taken by the 
 */
function showScore(){
    resetState();
    quizElement.innerHTML = `You have scored ${score} out of ${selectedQuestions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";

    if (currentQuestionIndex === selectedQuestions.length) {
        // Display the "GO TO START" button only at the end of the quiz
        homeButton.style.display = "block";
        // Show the Total Time Taken element when the quiz is completed
        displayTotalTimeTaken();
    } else {
        homeButton.style.display = "none";
        // Hide the Total Time Taken element when the game restarts
        let totalTimeTakenElement = document.getElementById("totalTimeTaken");
        totalTimeTakenElement.setAttribute("hidden", "true");
    }
}

/*Define the Go to start button accion */
function handleGoToStartButton() {
    // Redirect to the index.html page
    window.location.href = "index.html";
}

homeButton.addEventListener("click", handleGoToStartButton);

/* Define the next button actions */
function handleQuizAction() {
    if (currentQuestionIndex < selectedQuestions.length) {
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

// Start the quiz initially
startQuiz();