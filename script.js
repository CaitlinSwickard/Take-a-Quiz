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






// WHY IS THIS SHOWING NAN???????
// timer seconds
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



// function to start the quiz
function startQuiz() {
  console.log('started');
  secondsLeft = 60;

  questionContainerElement.classList.remove('hide');

}


function showQuestions() {
  for (let i = 0; i < questions.length; i++) {
    questionElement.innerText = questions.question
    question.choices.array.forEach(element => {
      const button = document.createElement('button')
      button.innerText = choices.text
      button.classList.add('btn')
      if (choices.correct) {
        setNextQuestion();
      }

    });




    function setNextQuestion() {
      showQuestions();
    }









    function selectAnswer() {

    }



    function endQuiz() {

    }







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
    ]









// score card page + adding scores to local storage and display

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

// // playerList.addEventListener("click", function (event) {
// //   var element = event.target;
// //   if (element.matches("button") === true) {
// //     var index = element.parentElement.getAttribute("data-index");
// //     todos.splice(index, 1);
// //     storedPlayers();
// //     renderScores();
// //   }
// // });

// init();