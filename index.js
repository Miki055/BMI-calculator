"use strict";
import "./imperial.js";
import { heightFt, heightIn, weightSt, weightLbs } from "./imperial.js";
const heightInput = document.querySelector(".heightInput");
const weightInput = document.querySelector(".weightInput");
const welcomeMessage = document.querySelector(".bmi-welcome");
const resultMessage = document.querySelector(".bmi-value");
const numberResult = document.querySelector(".bmi-num");
const idealWeight = document.querySelector(".ideal-weight");
const healthinessText = document.querySelector(".ideal-weight-text");

function showWelcome() {
  welcomeMessage.style.display = "flex";
  resultMessage.style.display = "none";
}
function showResult() {
  welcomeMessage.style.display = "none";
  resultMessage.style.display = "flex";
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);
function calculateBMI() {
  const weight = weightInput.valueAsNumber;
  const height = heightInput.valueAsNumber;
  if (Number.isNaN(weight) || Number.isNaN(height)) return;
  showResult();

  let bmiResult = weight / (height / 100) ** 2;
  numberResult.innerHTML = bmiResult.toFixed(2);
  if (bmiResult < 18.5) {
    healthinessText.textContent = "not healthy";
  } else if (bmiResult > 24.9) {
    healthinessText.textContent = "not healthy";
  } else {
    healthinessText.textContent = "healthy";
  }
  idealWeight.textContent = calculateIdealWeight(height);
}
function calculateIdealWeight(height) {
  const min = 18.5;
  const max = 24.9;

  let weightMin = min * (height / 100) ** 2;
  let weightMax = max * (height / 100) ** 2;

  return `${weightMin.toFixed(2)}kgs - ${weightMax.toFixed(2)}kgs`;
}

// IMPERIAL PART

// Radio Btns
const imperialBtn = document.querySelector("#imperialBtn");
const metricBtn = document.querySelector("#metric");
const metricBox = document.querySelector(".calculator-metric");
const imperialBox = document.querySelector(".calculator-imperial");
// const backgroundBtn = document.querySelector(".backgroundUnit");

metricBtn.addEventListener("click", () => {
  if (metricBtn.checked) {
    metricBox.classList.remove("hide");
    imperialBox.classList.add("hide");
    metricBtn.classList.add("backgroundUnit");
    imperialBox.classList.remove("unitBtn");
    metricBox.classList.add("unitBtn");
    clearInputValues();
    showWelcome();
  }
});
imperialBtn.addEventListener("click", () => {
  if (imperialBtn.checked) {
    imperialBox.classList.remove("hide");
    metricBox.classList.remove("unitBtn");
    metricBox.classList.add("hide");
    imperialBox.classList.add("unitBtn");
    clearInputValues();
    showWelcome();
  }
});
function clearInputValues() {
  heightFt.value = "";
  heightIn.value = "";
  weightSt.value = "";
  weightLbs.value = "";
  heightInput.value = "";
  weightInput.value = "";
}
