// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


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





let secondsLeft;
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
startButton.addEventListener('click', startQuiz)


// function to start the quiz and timer / un hide the questions /hide the instruction screen
function startQuiz() {
  console.log('started');
  secondsLeft = 60;
  instructionContainerElement.style.display = "none";

  showQuestions();
}

function showQuestions() {
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
    choicesButton.addEventListener('click', setNextQuestion)
  });
}


function setNextQuestion() {
  showQuestions(questions[currentQuestionIndex++])
  console.log(setNextQuestion)
}



// NOTHING PAST HERE WORKS!!!!!

function checkAnswer(answer) {
  // checking to see if answer clicked is correct
  if (questions[currentQuestionIndex].correct == answer) {
    console.log('answer is correct');
    // if wrong take 10 seconds off the clock
  } else {
    (secondsLeft.value - 10)
  }
}

checkAnswer('True');




// ends quiz when done and calls on score form to be filled out
function quizEnd() {
  if (currentQuestionIndex > questions.length)
    highScores();
}




// variables fo HTML elements
var submitEl = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");
var scoreListEl = document.querySelector("#score-list");
var scoreContainerEl = document.getElementById("#score-container")

// Action to be performed on click store in named function
function highScores(event) {
  scoreContainerEl.classList.remove("hide");
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = initialsInput.value + " " + secondsLeft.value;
  scoreListEl.textContent = score - list;
}

// Add listener to submit element
submitEl.addEventListener("click", highScores);











