 class Translator { 
   translateWord(input) {
     // doesn't do anything?;
   }
}

class MorseCodeTranslator extends Translator {
  constructor() {
    super();
  }
}

class FrenchTranslator extends Translator {
  constructor() {
    super();
  }

  translateWord(input) {
    let translatedWord;
    if(input === "hello") {
      translatedWord = "bonjour";
    } else {
      translatedWord = "not found";
    }
    return translatedWord;
  }
}

export { MorseCodeTranslator, FrenchTranslator };