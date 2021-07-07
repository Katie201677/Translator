"use strict";

var _translator = require("./translator.js");

var inputBox = document.querySelector(".word-input__input");
var languageSelector = document.querySelector(".language-selector__select");
var outputBox = document.querySelector(".output__p");
var resetButton = document.querySelector(".refresh-button__button");
var submitButton = document.querySelector(".word-input__submit");
var inputValue = "";
var languageSelection = "";
var translator;
languageSelector.addEventListener("change", function () {
  languageSelection = languageSelector.value;

  if (languageSelection === "Morse Code") {
    translator = new _translator.MorseCodeTranslator();
  } else if (languageSelection === "French") {
    translator = new _translator.FrenchTranslator();
  }
});
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  inputValue = inputBox.value;
  outputBox.innerHTML = translator.translateWord(inputValue);
});
resetButton.addEventListener("click", function () {
  document.querySelector(".form").reset();
  inputValue = "";
  translator = "";
  languageSelection = "";
});