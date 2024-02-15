function play() {
  hideElementById("home");
  showElementById("playground-section");
  continueGame();
}

function continueGame() {
  const alphabet = randomAlphabeets();
  const currentAlphabet = document.getElementById("displayWord");
  currentAlphabet.innerText = alphabet;
}
