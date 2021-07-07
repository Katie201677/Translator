import { MorseCodeTranslator, FrenchTranslator } from './translator.js';

const inputBox = document.querySelector(".word-input__input");
const languageSelector = document.querySelector(".language-selector__select");
const outputBox = document.querySelector(".output__p");
const resetButton = document.querySelector(".refreshButton__button");
const submitButton = document.querySelector(".word-input__submit");

let inputValue = "";
let languageSelection = "";
let translator;

languageSelector.addEventListener("change", () => {
  languageSelection = languageSelector.value;
  if (languageSelection === "Morse Code") {
    translator = new MorseCodeTranslator();
  } else if (languageSelection === "French") {
    translator = new FrenchTranslator();
  }
})

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  inputValue = inputBox.value;
  outputBox.innerHTML = translator.translateWord(inputValue);
})

resetButton.addEventListener("click", () => {
  document.querySelector(".form").reset();
  inputValue = "";
  translator = null;
  languageSelection = "";
})
