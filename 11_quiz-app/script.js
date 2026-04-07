const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const score = document.getElementById("score");

const quizData = [
  {
    question: "Which language runs in the browser?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Creative Style Syntax", "Computer Style Sheets", "Colorful Style System"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Level", "Home Tool Markup Language"],
    correct: "HyperText Markup Language"
  }
];

let currentQuestion = 0;
let totalScore = 0;

function loadQuestion() {
  const current = quizData[currentQuestion];
  question.textContent = current.question;
  answers.innerHTML = "";
  score.textContent = "";

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(answer, button));
    answers.appendChild(button);
  });
}

function selectAnswer(selected, selectedButton) {
  const correctAnswer = quizData[currentQuestion].correct;

  if (selected === quizData[currentQuestion].correct) {
    totalScore++;
  }

  Array.from(answers.children).forEach((button) => {
    if (button.textContent === selected) {
      button.classList.add("selected");
    }

    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    } else if (button === selectedButton && selected !== correctAnswer) {
      button.classList.add("wrong");
    }

    button.disabled = true;
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    question.textContent = "Quiz Finished!";
    answers.innerHTML = "";
    nextBtn.style.display = "none";
    score.textContent = `Your score: ${totalScore}/${quizData.length}`;
  }
});

loadQuestion();
