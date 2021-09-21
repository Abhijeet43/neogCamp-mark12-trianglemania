const angleInputs = document.querySelectorAll(".input-value");
const isTriangleBtn = document.querySelector("#btn-is-triangle");
const resetBtn = document.querySelector("#btn-reset");
const outputEl = document.querySelector("#output");

function showMessage(msg) {
  outputEl.innerText = msg;
}

function hideMessage() {
  setTimeout(() => {
    outputEl.innerText = "";
  }, 1500);
}

function reset() {
  for (const angleInput of angleInputs) {
    angleInput.value = "";
  }
  angleInputs[0].focus();
  hideMessage();
}

function calculateSumOfAngles(angleOne, angleTwo, angleThree) {
  return angleOne + angleTwo + angleThree;
}

function checkIsTriangle() {
  const angleOne = Number(angleInputs[0].value);
  const angleTwo = Number(angleInputs[1].value);
  const angleThree = Number(angleInputs[2].value);

  if (angleOne && angleTwo && angleThree) {
    if (
      !(angleOne <= 0 || angleOne > 180) &&
      !(angleTwo <= 0 || angleTwo > 180) &&
      !(angleThree <= 0 || angleThree > 180)
    ) {
      const sumOfAngles = calculateSumOfAngles(angleOne, angleTwo, angleThree);

      if (sumOfAngles === 180) {
        showMessage("Yay!! Angles form triangle");
      } else {
        showMessage("Ohh No!! Angles donot form a triangle");
      }
    } else {
      showMessage("Angles must be between 1 to 180");
      reset();
      hideMessage();
    }
  } else {
    showMessage("Fields cannot be empty Or 0");
    reset();
    hideMessage();
  }
}

isTriangleBtn.addEventListener("click", checkIsTriangle);
resetBtn.addEventListener("click", reset);
