function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgcolorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBgcolerById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function updateScore() {
  // update score
  const currentScore = document.getElementById("score");
  const currentScoreText = currentScore.innerText;
  const currentScoreNum = parseInt(currentScoreText);
  const newScore = currentScoreNum + 1;
  currentScore.innerText = newScore;
  return newScore - 1;
}

function updateLife() {
  const currentLife = document.getElementById("life");
  const currentLifeText = currentLife.innerText;
  const currentLifeNumber = parseInt(currentLifeText);
  const updatedLife = currentLifeNumber - 1;
  currentLife.innerText = updatedLife;
}

function updateFinalScore() {
  const finalScore = updateScore();
  const finalScoreElement = document.getElementById("final-final-score");
  finalScoreElement.innerText = finalScore;
}

function lifeCompare() {
  const currentLife = document.getElementById("life");
  const currentLifeText = currentLife.innerText;
  const currentLifeNumber = parseInt(currentLifeText);
  return currentLifeNumber;
}

function randomAlphabeets() {
  const alphabetstrings = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetstrings.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}
