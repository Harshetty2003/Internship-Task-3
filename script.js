var currentQuestionIndex = 0;
var score = 0;

var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var optionsContainer = document.getElementById("options-container");
var nextButton = document.getElementById("next-btn");

var resultContainer = document.getElementById("result-container");
var scoreElement = document.getElementById("score");

var quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: 0
  }
];

function initializeQuiz() {
  showQuestion();
  nextButton.addEventListener("click", showNextQuestion);
}

function showQuestion() {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";

  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = document.createElement("div");
    option.className = "option";
    option.textContent = currentQuestion.options[i];
    option.setAttribute("data-index", i);
    optionsContainer.appendChild(option);

    option.addEventListener("click", selectOption);
  }
}

function selectOption() {
  var selectedOptionIndex = parseInt(this.getAttribute("data-index"));
  var currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOptionIndex === currentQuestion.answer) {
    score++;
  }

  showNextQuestion();
}

function showNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  scoreElement.textContent = "Your score is " + score + " out of " + quizQuestions.length + ".";
}

initializeQuiz();
