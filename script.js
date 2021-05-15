


// variables for HTML elements
const instructionContainerElement = document.getElementById('instruction')
const startButton = document.getElementById('start-btn');
const timeEl = document.querySelector(".timer");
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choiceElement = document.getElementById('choices');

let currentQuestionIndex = 0



// array of questions for the quiz
const questions = [
  {
    question: 'Which one is a value for a boolean?',
    choices: [
      'True',
      'Math.random',
      'Function',
      'Loop',
    ],
    correct: 'True'
  },
  {
    question: 'How to we start flex box in css?',
    choices: [
      'align-self: flex-start',
      'display: flex',
      'flex-direction: row',
      'flex-wrap: wrap',
    ],
    correct: 'display: flex'
  },
  {
    question: 'How do we include jQuery in our webpage?',
    choices: [
      'With a NDC',
      'With a function',
      'With a CDN',
      'With a method',
    ],
    correct: 'With a CDN',
  },
  {
    question: 'What does DOM stand for?',
    choices: [
      'Document Object Method',
      'Document Object Menu',
      'Document Object Motherboard',
      'Document Object Model',
    ],
    correct: 'Document Object Model',
  }
];





let secondsLeft = 60;
// function to start timer set in a variable
let timerInterval = setInterval(function () {
  secondsLeft--;
  timeEl.textContent = 'Time: ' + secondsLeft;

  if (secondsLeft === 0) {
    // stops the clock at 0
    clearInterval(timerInterval);
    endQuiz();
  }
}, 1000);



// event listener for click to start quiz
startButton.addEventListener('click', startQuiz);


// function to start the quiz and timer 
function startQuiz() {
  console.log('started');

  // hides the instruction screen to allow questions to display
  instructionContainerElement.style.display = "none";

  showQuestions();
}

function showQuestions() {
  if (currentQuestionIndex < questions.length) {
    // show questions to screen
    questionContainerElement.classList.remove("hide");
    // adding text content
    questionElement.textContent = questions[currentQuestionIndex].question;
    // loop over choices
    choiceElement.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach(function (choice) {
      console.log(choice);
      // create new button for each choice
      const choicesButton = document.createElement("button");
      choicesButton.textContent = choice;
      // display on the page
      choiceElement.appendChild(choicesButton);
      // sets next question after a choice has been selected
      choicesButton.addEventListener('click', function (event) {
        checkAnswer(event.target.textContent);
        setNextQuestion();
      });

    });
  } else {
    quizEnd();
  }
}


function setNextQuestion() {
  // sets index for next question
  showQuestions(questions[currentQuestionIndex++]);
  console.log(currentQuestionIndex);
}





function checkAnswer(answer) {
  // checking to see if answer clicked is correct
  if (questions[currentQuestionIndex].correct == answer) {
    console.log('answer is correct');
    // if wrong take 10 seconds off the clock
  } else {
    (secondsLeft -= 10)

  }
}

checkAnswer('True');




// ends quiz when done and calls on score form to be filled out
// what do i need to add here??
function quizEnd() {
  // stop timer here
  choiceElement.innerHTML = "";
  questionElement.innerHTML = "";
  highScores();
}




// variables fo HTML elements
var submitEl = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");
var scoreListEl = document.querySelector("#score-list");
var scoreContainerEl = document.getElementById("score-container")


// Do i need an empty variable for seconds left on the clock??

// function to capture initials and score (time left on clock)
function highScores(event) {
  // removes hide to display final screen
  scoreContainerEl.classList.remove("hide");
  // Prevent default action
  event.preventDefault();
  console.log(event);
  // shows initials and score (time left on clock)
  var response = initialsInput.value + " " + secondsLeft.value;
  scoreListEl.textContent = initials;
}

// Add listener to submit 
submitEl.addEventListener("click", highScores);











