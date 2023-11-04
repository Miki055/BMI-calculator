"use strict";

const welcomeMessage = document.querySelector(".bmi-welcome");
const resultMessage = document.querySelector(".bmi-value");
const numberResult = document.querySelector(".bmi-num");
const idealWeight = document.querySelector(".ideal-weight");
const healthinessText = document.querySelector(".ideal-weight-text");
const bmiBox = document.querySelector(".bmi-value hide");
const bmiWelcomeBox = document.querySelector(".bmi-welcome--box");
// Heights IMPERIAL
const heightFt = document.querySelector("#heightFt");
const heightIn = document.querySelector("#heightIn");
// Weight Imperial
const weightSt = document.querySelector("#weightSt");
const weightLbs = document.querySelector("#weightLbs");

const weightConversionFactor = {
  stoneToKg: 6.35029,
  libraToKg: 0.453592,
};
export { heightFt, heightIn, weightSt, weightLbs };

heightFt.addEventListener("input", showResult);
heightIn.addEventListener("input", showResult);
weightSt.addEventListener("input", showResult);
weightLbs.addEventListener("input", showResult);
function showResult() {
  const { value: foot } = heightFt;
  const { value: inch } = heightIn;
  const { value: stone } = weightSt;
  const { value: libra } = weightLbs;

  if (foot && inch && stone && libra) {
    welcomeMessage.style.display = "none";
    resultMessage.style.display = "flex";

    let bmi = calculateIMCImperial(foot, inch, stone, libra);

    numberResult.innerHTML = bmi.toFixed(2);
    numberResult.style.display = "flex";
    idealWeight.innerText = calculateIdealWeightImperial(heightFt, heightIn);

    console.log(`Your bmi is ${bmi}`);
  } else {
    welcomeMessage.classList.remove("hide");
    resultMessage.classList.add("hide");
  }
}
function calculateIMCImperial(foot, inch, stone, libra) {
  const heightM = (foot * 30.48 + inch * 2.54) / 100;
  const weightKg =
    stone * weightConversionFactor.stoneToKg +
    libra * weightConversionFactor.libraToKg;
  const imc = weightKg / heightM ** 2;
  return imc;
}
function calculateIdealWeightImperial(foot, inch) {
  const heightM = (foot * 30.48 + inch * 2.54) / 100;

  const weightMinKg = 18.5 * heightM ** 2;
  const weightMaxKg = 24.9 * heightM ** 2;

  const weightMinStones = Math.floor(
    weightMinKg / weightConversionFactor.stoneToKg
  );
  const weightMinLibras = Math.round(
    (weightMinKg % weightConversionFactor.stoneToKg) /
      weightConversionFactor.libraToKg
  );

  const weightMaxStones = Math.floor(
    weightMaxKg / weightConversionFactor.stoneToKg
  );
  const weightMaxLibras = Math.round(
    (weightMaxKg % weightConversionFactor.stoneToKg) /
      weightConversionFactor.libraToKg
  );
  console.log(typeof weightMaxLibras);
  console.log(typeof weightMaxStones);
  console.log(typeof weightMinLibras);
  console.log(typeof weightMinStones);

  return `${weightMinStones}st ${weightMinLibras}lbs - ${weightMaxStones}st ${weightMaxLibras}lbs.`;
}
