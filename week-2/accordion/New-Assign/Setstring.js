const word = "JavaScript";
const animationContainer = document.getElementById("animation-container")

function createLetter(letter) {
    const span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("animation-letter");
    return span;
  }

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const animatedLetter = createLetter(letter);
    animationContainer.appendChild(animatedLetter);
  }