import { EnglishToMorseCodeTranslator, MorseCodeToEnglishTranslator } from './classes.js';

const inputBox = document.querySelector(".word-input__input");
const languageSelector = document.querySelector(".language-selector__select");
const outputBox = document.querySelector(".output__p");
const resetButton = document.querySelector(".refresh-button__button");
const submitButton = document.querySelector(".word-input__submit");



let inputValue = "";
let languageSelection = "";
let translator;

languageSelector.addEventListener("change", () => {
  languageSelection = languageSelector.value;
  if (languageSelection === "Morse Code") {
    translator = new MorseCodeToEnglishTranslator();
  } else if (languageSelection === "English") {
    translator = new EnglishToMorseCodeTranslator();
  }
  // console.log(translator);
})

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  inputValue = inputBox.value;
  // console.log(inputValue);
  outputBox.innerHTML = translator.translate(inputValue);
  // console.log(translator.translate(inputValue));
})

// resetButton.addEventListener("click", () => {
//   document.querySelector(".form").reset();
//   inputValue = "";
//   translator = "";
//   languageSelection = "";
// })
