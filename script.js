// css values 
document.getElementById('question').style.cssText = "background: #192a3b; color: white; padding: 10px 10px; margin: auto; display: flex; justify-content: center; flex-direction: column; align-items: center; width: 100vh;"
document.getElementById('choices').style.cssText = "background: #192a3b; color: white; padding: 10px 10px; margin: auto; display: flex; justify-content: center; flex-direction: column; align-items: center; width: 100vh;"

document.querySelector('.score-contents').style.cssText = "background: #192a3b; color: white; padding: 30px 30px; margin: auto; display: flex; justify-content: center; flex-direction: column; align-items: center; width: 100vh; height: 60vh;"



// variables for HTML elements
const instructionContainerElement = document.getElementById('instruction')
const startButton = document.getElementById('start-btn');
const timeEl = document.querySelector('.timer');
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
    question: 'How do we start flex box in css?',
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
    // endQuiz();
  }
}, 1000);



// event listener for click to start quiz
startButton.addEventListener('click', startQuiz);



// function to start the quiz and timer 
function startQuiz() {

  secondsLeft = 60;
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
    // empties 'div' content for moving through choices
    choiceElement.innerHTML = "";
    // loop over choices
    questions[currentQuestionIndex].choices.forEach(function (choice) {
      // create new button for each choice
      const choicesButton = document.createElement("button");
      choicesButton.textContent = choice;
      // display on the page
      choiceElement.appendChild(choicesButton);
      // checks to see if choice selected is correct
      choicesButton.addEventListener('click', function (event) {
        // calls check answer function to check button clicked 
        checkAnswer(event.target.textContent);
        // sets next question to appear 
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
    // if wrong take 10 seconds off the clock
  } else {
    (secondsLeft -= 10)
  }
}
checkAnswer('True');



// stops timer function 
function quizEnd() {

  // removes hide to display final screen
  scoreContainerEl.classList.remove("hide");
  // stops timer here
  clearInterval(timerInterval);
  // empties 'div' elements 
  choiceElement.innerHTML = "";
  questionElement.innerHTML = "";

}



// variables fo HTML elements for high score form
const submitEl = document.querySelector("#submit");
const initialsInput = document.querySelector("#initials");
const scoreListEl = document.querySelector("#score-list");
const scoreContainerEl = document.getElementById("score-container");



// Add listener event to submit button
submitEl.addEventListener("click", function (event) {
  // Prevent default action of refresh on submit
  event.preventDefault();
});



function saveHighScore() {

  // save form data as an object
  const scores = {
    initialsInput: initialsInput.value,
    secondsLeft: secondsLeft.value
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string - setting the whole array as 'scores'
  localStorage.setItem("scores", JSON.stringify(scores));
}



function setScores() {

  // array for value from local storage or initialize an empty array
  var highScores = JSON.parse(localStorage.getItem("scores") || [])
  // Check if data is returned, if not exit out of the function
  if (highScores !== null) {
    const response = initialsInput.value + " " + secondsLeft.value;
    scoreListEl.textContent = response;
    //this pushes that string into the array
    highScores.push(response);
  } else {
    return;
  }

  saveHighScore();
  setScores();
}










