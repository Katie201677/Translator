"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MorseCodeToEnglishTranslator = exports.EnglishToMorseCodeTranslator = void 0;

var _maps = require("./maps.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Translator =
/*#__PURE__*/
function () {
  function Translator(map) {
    _classCallCheck(this, Translator);

    this.map = map;
  } // add verification to DOM function


  _createClass(Translator, [{
    key: "arrayToTranslate",
    value: function arrayToTranslate(input) {
      return input.split("");
    }
  }, {
    key: "translateLetter",
    value: function translateLetter(letter) {
      return this.map.letter;
    }
  }]);

  return Translator;
}();

var EnglishToMorseCodeTranslator =
/*#__PURE__*/
function (_Translator) {
  _inherits(EnglishToMorseCodeTranslator, _Translator);

  function EnglishToMorseCodeTranslator() {
    var _this;

    _classCallCheck(this, EnglishToMorseCodeTranslator);

    _this.map = _maps.englishToMorseMap; // then call super to pass this map up to parent constructor as the parent might be doing something to map (e.g. verifying) rather than just returning the argument.

    return _this = _possibleConstructorReturn(this, _getPrototypeOf(EnglishToMorseCodeTranslator).call(this, map));
  }

  return EnglishToMorseCodeTranslator;
}(Translator);

exports.EnglishToMorseCodeTranslator = EnglishToMorseCodeTranslator;

var MorseCodeToEnglishTranslator =
/*#__PURE__*/
function (_Translator2) {
  _inherits(MorseCodeToEnglishTranslator, _Translator2);

  function MorseCodeToEnglishTranslator() {
    var _this2;

    _classCallCheck(this, MorseCodeToEnglishTranslator);

    _this2.map = _maps.morseToEnglishMap;
    return _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MorseCodeToEnglishTranslator).call(this, map));
  }

  return MorseCodeToEnglishTranslator;
}(Translator);

exports.MorseCodeToEnglishTranslator = MorseCodeToEnglishTranslator;