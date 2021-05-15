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

const instructionContainerElement = document.getElementById('instruction')
const startButton = document.getElementById('start-btn');
const timeEl = document.querySelector(".timer");
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choiceElement = document.getElementById('choices');



let currentQuestionIndex = 0


// function to start timer set in a variable
let timerInterval = setInterval(function () {
  secondsLeft--;
  timeEl.textContent = 'Time: ' + secondsLeft;

  if (secondsLeft === 0) {
    // stops the clock at 0
    clearInterval(timerInterval);
    // endQuiz();
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







// console.log(quiz) -- all questions -- hook this up to the button
//console log just one question
// add button to this show questions method
// loop thru each question after clicking a button
//identify the iterator to know which question to display next




// function selectedAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.correct
//   if (questions.length > currentQuestionIndex + 1)
//     setNextQuestion();
// };


// function quizEnd() {

// }











// array of questions for the quiz
const questions = [
  {
    question: 'What is a value for boolean?',
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



function saveHighScores() {

}


// // score card page + adding scores to local storage and display
// // week 4 unit 26 example


// const initialInput = document.querySelector("#initial-text");
// const scoreForm = document.querySelector("#score-form");
// const playerList = document.querySelector("#player-list");
// const playerCountSpan = document.querySelector("#player-count");

// let scores = [];

// function renderScores() {
//   playerList.innerHTML = "";
//   playerCountSpan.textContent = scores.length;
//   for (var i = 0; i < scores.length; i++) {
//     var score = scores[i];
//     var li = document.createElement('li');
//     li.textContent = score;
//     playerList.appendChild(li);
//     console.log(scores);
//   }
// }

// function init() {
//   var storedPlayers = JSON.parse(localStorage.getItem("scores"));
//   if (storedPlayers !== null) {
//     scores = storedPlayers;
//   }
//   renderScores();
// }

// function storedPlayers() {
//   localStorage.setItem("scores", JSON.stringify(scores));
// }

// scoreForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   var initText = initialInput.value.trim();
//   if (initText === "") {
//     return;
//   }

//   scores.push(initText);
//   initialInput.value = "";

//   storedPlayers();
//   renderScores();

// });


// init();