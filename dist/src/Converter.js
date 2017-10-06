"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Converter = function () {
	function Converter() {
		_classCallCheck(this, Converter);
	}

	_createClass(Converter, [{
		key: "poundsToKilograms",
		value: function poundsToKilograms() {
			for (var _len = arguments.length, pounds = Array(_len), _key = 0; _key < _len; _key++) {
				pounds[_key] = arguments[_key];
			}

			var result = pounds.map(function (pound) {
				return pound * 0.453592;
			});
			if (result.length == 1) return result[0];
			return result;
		}
	}, {
		key: "poundsToOunces",
		value: function poundsToOunces() {
			for (var _len2 = arguments.length, pounds = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				pounds[_key2] = arguments[_key2];
			}

			var result = pounds.map(function (pound) {
				return pound * 16;
			});
			if (result.length == 1) return result[0];
			return result;
		}
	}, {
		key: "kilogramsToPounds",
		value: function kilogramsToPounds() {
			for (var _len3 = arguments.length, kilograms = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				kilograms[_key3] = arguments[_key3];
			}

			var result = kilograms.map(function (kilogram) {
				return kilogram * 2.204623;
			});
			if (result.length == 1) return result[0];
			return result;
		}
	}, {
		key: "kilogramsToOunces",
		value: function kilogramsToOunces() {
			for (var _len4 = arguments.length, kilograms = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				kilograms[_key4] = arguments[_key4];
			}

			var result = kilograms.map(function (kilogram) {
				return kilogram * 35.27396;
			});
			if (result.length == 1) return result[0];
			return result;
		}
	}, {
		key: "ouncesToPounds",
		value: function ouncesToPounds() {
			for (var _len5 = arguments.length, ounces = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				ounces[_key5] = arguments[_key5];
			}

			var result = ounces.map(function (ounce) {
				return ounce * 0.0625;
			});
			if (result.length == 1) return result[0];
			return result;
		}
	}, {
		key: "ouncesToKilograms",
		value: function ouncesToKilograms() {
			for (var _len6 = arguments.length, ounces = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
				ounces[_key6] = arguments[_key6];
			}

			var result = ounces.map(function (ounce) {
				return ounce * 0.02835;
			});
			if (result.length == 1) return result[0];
			return result;
		}
	}]);

	return Converter;
}();

exports.default = Converter;