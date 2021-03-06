import { expect, test } from "@jest/globals";
import { EnglishToMorseCodeTranslator, MorseCodeToEnglishTranslator } from "../scripts/classes";

describe("Tests for translator classes", () => {
  describe("English To Morse", () => {
    const englishTestTranslator = new EnglishToMorseCodeTranslator();
    test("creates array from input word", () => {
      expect(englishTestTranslator.createArrayToTranslate("test")).toEqual(["t", "e", "s", "t"]);
    });

    test("creates array from input word including white space", () => {
      expect(englishTestTranslator.createArrayToTranslate("test a")).toEqual(["t", "e", "s", "t", " ", "a"]);
    });

    test("translates letter", () => {
      expect(englishTestTranslator.translateLetter("A")).toBe(".-");
    });

    test("translates letter", () => {
      expect(englishTestTranslator.translateLetter(" ")).toBe("/");
    });

    test("translates word", () => {
      expect(englishTestTranslator.translate("DOG")).toBe("-.. --- --.");
    });

    test("translates words with white space", () => {
      expect(englishTestTranslator.translate("DOG CAT")).toBe("-.. --- --. / -.-. .- -");
    });

    test("translates words with mix of upper and lower case letter", () => {
      expect(englishTestTranslator.translate("DoG CAt")).toBe("-.. --- --. / -.-. .- -");
    });

    test("throws error for invalid letter", () => {
      expect(() => {
        englishTestTranslator.translateLetter("3")
     }).toThrowError("3 is not a valid input.");
    })
  })

  describe("Morse to English", () => {
    const morseTestTranslator = new MorseCodeToEnglishTranslator();

    test("creates array from input word", () => {
      expect(morseTestTranslator.createArrayToTranslate(".- -... -.-.")).toEqual([".-", " ", "-...", " ", "-.-."]);
    });

    test("creates array handling white space", () => {
      expect(morseTestTranslator.createArrayToTranslate("--- / ... .-")).toEqual(["---", " / ", "...", " ", ".-"]);
    });

    test("translates letter", () => {
      expect(morseTestTranslator.translateLetter("...")).toBe("S")
    });

    test("translates letter", () => {
      expect(morseTestTranslator.translateLetter("/")).toBe(" ")
    });

    test("throws error for invalid letter", () => {
      expect(() => {
        morseTestTranslator.translateLetter("3")
     }).toThrowError("3 is not a valid input.");
    })

    test("translates Morse to English", () => {
      expect(morseTestTranslator.translate("... --- ...")).toBe("SOS");
    })
  })
})