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


const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const timeEl = document.querySelector(".timer");
const instructionContainerElement = document.getElementById('instruction')




// NEED TO ADD EVENT LISTENER FOR THE TIMER TO START WHEN START BUTTON IS PRESSED
// timer seconds
let secondsLeft;
// function to start timer set in a variable
let timerInterval = setInterval(function () {
  secondsLeft--;
  timeEl.textContent = secondsLeft + ' seconds left';

  if (secondsLeft === 0) {
    // stops the clock at 0
    clearInterval(timerInterval);
  }
}, 1000);



// event listener for click to start quiz
startButton.addEventListener('click', startQuiz)



// function to start the quiz
function startQuiz() {
  console.log('started');
  startButton.classList.add('hide');
  secondsLeft = 60;

  questionContainerElement.classList.remove('hide');

}






function setNextQuestion() {
  showQuestions();
}





function showQuestions(question) {
  questionElement.innerText = questions.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
  })
}




function selectAnswer() {

}





const questions = [
  {
    question: 'What is 1 + 1?',
    answer: [
      { text: '11', correct: false },
      { text: '111', correct: false },
      { text: '2', correct: true },
      { text: '4', correct: false },
    ]
  },
  {
    question: 'What is 3 + 3?',
    answer: [
      { text: '6', correct: true },
      { text: '9', correct: false },
      { text: '3', correct: false },
      { text: '33', correct: false },
    ]
  },
  {
    question: 'What is 6 + 6?',
    answer: [
      { text: '66', correct: false },
      { text: '12', correct: true },
      { text: '9', correct: false },
      { text: '3', correct: false },
    ]
  },
  {
    question: 'What is 4 + 4?',
    answer: [
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '10', correct: false },
    ]
  }
]







// this is start of high score form (PROJECT 26 WEEK 4 for info)

// var scoreInput = document.querySelector("#score");
// var scoreForm = document.querySelector("#score-form");
// var scoreList = document.querySelector("#score-list");
// var scoreCountSpan = document.querySelector("#score-count");

// var scores = [];

// function renderScores() {
//   scoreList.innerHTML = "";
//   scoreCountSpan.textContent = scores.length;

//   for (var i = 0; i < scores.length; i++) {
//     var score = scores[i];
//     var li = document.createElement('li');
//     li.textContent = score;
//     li.setAttribute('data-index', i);
//     var button = document.createElement('button');
//     button.textContent = 
//   }
// }