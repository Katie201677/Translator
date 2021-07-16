"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.morseToEnglishMap = exports.englishToMorseMap = void 0;
var englishToMorseMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/"
};
exports.englishToMorseMap = englishToMorseMap;
var morseToEnglishMap = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C"
};
exports.morseToEnglishMap = morseToEnglishMap;