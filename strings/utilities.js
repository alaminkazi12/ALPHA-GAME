function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function randomAlphabeets() {
  const alphabetstrings = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetstrings.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  const uppAlphabet = alphabet.toLocaleUpperCase();
  return uppAlphabet;
}
