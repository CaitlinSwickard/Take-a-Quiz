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


// function to start the quiz
// this function should start the timer function when pressed and un hide the questions for the quiz and hide the instruction screen
function startQuiz() {
  console.log('started');
  secondsLeft = 60;
  instructionContainerElement.style.display = "none";
}


function showQuestions() {
  // show questions to screen
  questionContainerElement.classList.remove('hide');
  // loop through question array
  const question = questions.length
  for (let i = 0; i < question.length; i++) {
    console.log(questions[i])
    questions.textContent = questions.question
  }
}






//   questionElement.innerHTML = questions.question
//   question.choices.array.forEach(element => {
//     const button = document.createElement('button')
//     button.innerText = choices.text
//     console.log(question)
//     // add class list and style buttons in css??
//     if (choices.correct) {
//       setNextQuestion();
//     }
//   });
// }

// console.log(quiz) -- all questions -- hook this up to the button
//console log just one question
// add button to this show questions method
// loop thru each question after clicking a button
//identify the iterator to know which question to display next




function setNextQuestion() {
  showQuestions();
  // loop though showQuestion() to go through each question
  // if they answer wrong take 10 seconds off the timer function. 
}





function selectAnswer() {
  // show if the answer was correct or wrong 
  // Check answers input from end users and move to the next question

}



function endQuiz() {
  // end quiz
  // capture seconds left for score. Work with timer function??
  // un hide render score form for input
}






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







// score card page + adding scores to local storage and display
// week 4 unit 26 example


const initialInput = document.querySelector("#initial-text");
const scoreForm = document.querySelector("#score-form");
const playerList = document.querySelector("#player-list");
const playerCountSpan = document.querySelector("#player-count");

let scores = [];

function renderScores() {
  playerList.innerHTML = "";
  playerCountSpan.textContent = scores.length;
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement('li');
    li.textContent = score;
    playerList.appendChild(li);
    console.log(scores);
  }
}

function init() {
  var storedPlayers = JSON.parse(localStorage.getItem("scores"));
  if (storedPlayers !== null) {
    scores = storedPlayers;
  }
  renderScores();
}

function storedPlayers() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

scoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var initText = initialInput.value.trim();
  if (initText === "") {
    return;
  }

  scores.push(initText);
  initialInput.value = "";

  storedPlayers();
  renderScores();

});

// playerList.addEventListener("click", function (event) {
//   var element = event.target;
//   if (element.matches("button") === true) {
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);
//     storedPlayers();
//     renderScores();
//   }
// });

init();