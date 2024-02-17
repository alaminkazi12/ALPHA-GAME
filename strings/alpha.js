function handleKeyBoradEvent(event) {
  const playerPressed = event.key;
  const expectedPressed = document
    .getElementById("displayWord")
    .innerText.toLocaleLowerCase();

  if (playerPressed === expectedPressed) {
    const alphabet = randomAlphabeets();
    removeBgcolerById(expectedPressed);
    updateScore();

    continueGame();
  } else {
    updateLife();
    const currentLife = lifeCompare();
    if (currentLife == 0) {
      hideElementById("playground-section");
      showElementById("final-score");
      updateFinalScore();
    }
  }
}

document.addEventListener("keyup", handleKeyBoradEvent);

function play() {
  hideElementById("home");
  showElementById("playground-section");
  hideElementById("final-score");
  continueGame();
}

function continueGame() {
  const alphabet = randomAlphabeets();
  const currentAlphabet = document.getElementById("displayWord");
  currentAlphabet.innerText = alphabet;
  setBgcolorById(alphabet);
}
