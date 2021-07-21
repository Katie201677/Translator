import { EnglishToMorseCodeTranslator, MorseCodeToEnglishTranslator } from './classes.js';

const inputBox = document.querySelector(".word-input__input");
const invalidInputMessage = document.querySelector(".invalid-input-message");
const languageSelector = document.querySelector(".language-selector__select");
const outputBox = document.querySelector(".output__p");
const resetButton = document.querySelector(".refresh-button__button");
const submitButton = document.querySelector(".word-input__submit");

let translator;

languageSelector.addEventListener("change", () => {
  let languageSelection = languageSelector.value;
  if (languageSelection === "Morse Code") {
    translator = new MorseCodeToEnglishTranslator();
  } else if (languageSelection === "English") {
    translator = new EnglishToMorseCodeTranslator();
  }
  invalidInputMessage.style.display = "none";
  invalidInputMessage.innerHTML = `<p class="p">Please provide a valid input.</p>`
})

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = inputBox.value;
  try {
    outputBox.innerHTML = translator.translate(inputValue);
    invalidInputMessage.style.display = "none";
  } catch (e) {
    invalidInputMessage.innerHTML = e.message;
    invalidInputMessage.style.display = "block";
  }
})

resetButton.addEventListener("click", () => {
  document.querySelector(".form").reset();
  translator = "";
  outputBox.innerHTML = "";
  invalidInputMessage.style.display = "none";
})
