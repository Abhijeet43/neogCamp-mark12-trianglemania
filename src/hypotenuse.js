const aEl = document.querySelector("#a");
const bEl = document.querySelector("#b");
const hypotenuseBtn = document.querySelector("#btn-hypotenuse");
const resetBtn = document.querySelector("#btn-reset");
const resultEl = document.querySelector("#result");

function showMessage(msg) {
  resultEl.innerText = msg;
}

function hideMessage() {
  setTimeout(() => {
    resultEl.innerText = "";
  }, 1200);
}

function reset(err) {
  aEl.value = "";
  bEl.value = "";
  aEl.focus();
  if (err) {
    resultEl.innerText = "";
  }
}

function calculateSumOfSquares(a, b) {
  return a ** 2 + b ** 2;
}

function calculateHypotenuse() {
  const aValue = Number(aEl.value);
  const bValue = Number(bEl.value);

  if (aValue && bValue) {
    if (aValue > 0 && bValue > 0) {
      const sumOfSquares = calculateSumOfSquares(aValue, bValue);
      const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
      showMessage(`The length of hypotenuse is ${lengthOfHypotenuse} cm`);
    } else {
      showMessage("Fields cannot have negative values");
      hideMessage();
      reset(false);
    }
  } else {
    showMessage("Fields cannot be empty or 0");
    hideMessage();
    aEl.focus();
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
resetBtn.addEventListener("click", reset);
