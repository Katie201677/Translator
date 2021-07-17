import { EnglishToMorseCodeTranslator, MorseCodeToEnglishTranslator } from './classes.js';


const languageSelector = document.querySelector(".language-selector__select");
const inputBox = document.querySelector(".word-input__input");
const invalidInputMessage = document.querySelector(".invalid-input-message");
const outputBox = document.querySelector(".output__p");
const resetButton = document.querySelector(".refresh-button__button");
const submitButton = document.querySelector(".word-input__submit");

let inputValue = "";
let languageSelection = "";
let translator;

// 

languageSelector.addEventListener("change", () => {
  languageSelection = languageSelector.value;
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
  inputValue = inputBox.value;
  //checks for valid characters:
  // if (!translator.isValid(inputValue)) {
  //   invalidInputMessage.style.display = "block";
  // } else {
    try {
      outputBox.innerHTML = translator.translate(inputValue);
      invalidInputMessage.style.display = "none";
    } catch (e) {
      // throws error if invalid morse code key (i.e. valid characters (. -) but invalid combination)
      invalidInputMessage.innerHTML = e.message;
      invalidInputMessage.style.display = "block";
    }
  // }
})

resetButton.addEventListener("click", () => {
  document.querySelector(".form").reset();
  inputValue = "";
  translator = "";
  languageSelection = "";
  outputBox.innerHTML = "";
  invalidInputMessage.style.display = "none";
})
