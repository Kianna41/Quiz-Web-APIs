var timerElement = document.querySelector(".timer-countdown");
var startButton = document.querySelector(".button");
var submitButton = document.querySelector(".submit-button");
var timerInterval;
var secondsLeft = 60;

startButton.addEventListener("click", startButtonHandler);
//submitButton.addEventListener("click");

// Creating var of questions for user to answer. Create an array of objects.

var questions = [
  {
    One: "What symbols represent tags in HTML?",
    Answers: ["{}", "<>", "#"],
    correctAnswer: "<>",
  },
  {
    One: "What does CSS stand for?",
    Answers: ["Cascading Style Sheet", "Color Sheet Style", "Cute Stuff Sheet"],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    One: "The purpose of Javascript is to display what for the website ?",
    Answers: [
      "the skeleton, or the backbone of the page",
      "the aesthetic of the page",
      "the dynamic and interaction of the page",
    ],
    correctAnswer: "the dynamic and interaction of the page",
  },
];

//All the answers aren't corresponding on the screen, only the first answer is being displayed "correct"
var currentQuestion = 0;
var nextQuestion = questions.length - 1;

//Once start button is chosen, the questions displays in the text content box.
function startButtonHandler() {
  timerInterval = setInterval(timer, 1000);
  renderQuestion();
}

//Question function is placed in a loop to display all questions and answers in a list in the text content box.
function renderQuestion() {
  document.getElementById("questions").textContent =
    questions[currentQuestion].One;
  var answers = document.getElementById("answers");
  answers.innerHTML = "";
  for (i = 0; i < 3; i++) {
    var li = document.createElement("li");
    li.textContent = questions[currentQuestion].Answers[i];
    li.addEventListener("click", chooseAnswer);
    answers.appendChild(li);
  }
}

//Once choosing answer, if correct answer is chosen it alerts "correct answer". If wrong answer is wrong, alert "wrong answer"
function chooseAnswer(event) {
  var correct = 0;
  var wrong = 0;
  console.log(event.target.textContent);
  if (
    //need score to contine to update with correct/wrong answer
    questions[0].correctAnswer === event.target.textContent
  ) {
    alert("Correct Answer");
    correct = +1;
    document.getElementById("score").value = correct;
  } else {
    alert("Wrong Answer");
    wrong = +1;
    document.getElementById("wrong").value = wrong;
    secondsLeft = secondsLeft - 10;
    timerInterval = setInterval(timer, 1000);
    clearInterval(timerInterval);
  } //timer is speeding up when wrong choice is chosen instead of deducting
  currentQuestion++;
  renderQuestion();
}

//timer to countdown
function timer() {
  secondsLeft--;
  timerElement.textContent = secondsLeft;

  if (secondsLeft === 0) {
    clearInterval(timerInterval);
  }
}

console.log(timer);

//Just need to fix score and answer choice from showing as wrong after first question and score and initials showing.
