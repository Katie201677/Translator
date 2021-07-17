 import { englishToMorseMap, morseToEnglishMap } from "./maps.js";
 
 class Translator { 
  constructor(map) {
    this.map = map;
  } 

  createArrayToTranslate(input) {
    return input.split("");
  }

  translateLetter(letter) {
    if (!this.map.hasOwnProperty(letter)) {
      throw new Error(`${letter} is not a valid input.`);
    }
    return  this.map[letter];
  }

  translate(inputString) {
    const arrayToTranslate = this.createArrayToTranslate(inputString.toUpperCase());
    console.log(arrayToTranslate);
    let translatedArray = arrayToTranslate.map((letter) => {
      return this.translateLetter(letter);
    });
    console.log(translatedArray);
    return translatedArray.join(" ");
  }
}



class EnglishToMorseCodeTranslator extends Translator {
  constructor() {
    const map = englishToMorseMap;
    // then call super to pass this map up to parent constructor (i.e. as the argument to the parent constructor) as in another context the parent might be doing something to map (e.g. verifying) rather than just returning the argument.
    super(map); // call the parent constructor with map as the argument
  }
  isValid(inputString) {
    const regexValidCharacters = /^[a-zA-Z\s]+$/g;
    return regexValidCharacters.test(inputString);
  }
}

class MorseCodeToEnglishTranslator extends Translator {
  constructor() {
    const map = morseToEnglishMap;
    super(map);
  }

  createArrayToTranslate(input) {
    const regex = /([\s\/]+)/g;
    return input.split(regex);
  }

  isValid(inputString) {
    const regexValidCharacters = /^[\.\/\s-]+$/g;
    return regexValidCharacters.test(inputString);
  }

  translate(inputString) {
    const arrayToTranslate = this.createArrayToTranslate(inputString);
    const arrayWithWhiteSpaceRemoved = arrayToTranslate.filter(letter => letter !== " ");
    console.log(arrayWithWhiteSpaceRemoved);
    let translatedArray = arrayWithWhiteSpaceRemoved.map((letter) => {
      return this.translateLetter(letter);
    });
    console.log(translatedArray.join(""));
    return translatedArray.join("");
  }
}

export { EnglishToMorseCodeTranslator, MorseCodeToEnglishTranslator };




