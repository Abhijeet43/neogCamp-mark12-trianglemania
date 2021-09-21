const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#btn-submit");
const resetBtn = document.querySelector("#btn-reset");
const outputEl = document.querySelector("#output");

const inputs = document.querySelectorAll('input[type="radio"]');

const correctAnswers = ["90°", "right angled", "true", "two", "median"];

function showMessage(scoreResult) {
  outputEl.innerText = scoreResult;
}

function calculateScore() {
  let score = 0;
  const submittedAnswers = [];
  const formResults = new FormData(quizForm);

  for (let val of formResults.values()) {
    submittedAnswers.push(val);
  }

  if (submittedAnswers.length) {
    for (let val of submittedAnswers) {
      if (correctAnswers.includes(val)) {
        score++;
      }
    }
    showMessage(`Your score is ${score}`);
  }
}

function reset() {
  outputEl.innerText = "";
  for (const input of inputs) {
    input.checked = false;
  }
}

submitBtn.addEventListener("click", calculateScore);
resetBtn.addEventListener("click", reset);
