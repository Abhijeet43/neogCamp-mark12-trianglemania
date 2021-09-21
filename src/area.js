const baseEl = document.querySelector("#base");
const heightEl = document.querySelector("#height");
const areaBtn = document.querySelector("#btn-area");
const resetBtn = document.querySelector("#btn-reset");
const resultEl = document.querySelector("#result");

function hideMessage() {
  setTimeout(() => {
    resultEl.innerText = "";
  }, 1200);
}

function reset(err) {
  baseEl.value = "";
  heightEl.value = "";
  baseEl.focus();
  if (err) {
    resultEl.innerText = "";
  }
}

function showMessage(msg) {
  resultEl.innerText = msg;
}

function calculateArea() {
  const baseElValue = baseEl.value;
  const heightElValue = heightEl.value;
  if (baseElValue && heightElValue) {
    if (!(baseElValue <= 0 || heightElValue <= 0)) {
      const area = 0.5 * Number(baseElValue) * Number(heightElValue);
      showMessage(`The area of the triangle is ${area} cm²`);
    } else {
      showMessage(`Fields cannot have negative values or 0`);
      hideMessage();
      reset(false);
    }
  }
}

areaBtn.addEventListener("click", calculateArea);
resetBtn.addEventListener("click", reset);
