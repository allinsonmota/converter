
export default class Converter {

	constructor() {

	}
	
	poundsToKilograms(...pounds) {
		let result = pounds.map(pound => pound * 0.453592)
		if (result.length == 1) return result[0]
		return result
	}

	poundsToOunces(...pounds) {
		let result = pounds.map(pound => pound * 16)
		if(result.length == 1) return result[0]
		return result
	}

	kilogramsToPounds(...kilograms) {
		let result = kilograms.map(kilogram => kilogram * 2.204623)
		if(result.length == 1) return result[0]
		return result
	}

	kilogramsToOunces(...kilograms) {
		let result = kilograms.map(kilogram => kilogram * 35.27396)
		if(result.length == 1) return result[0]
		return result
	}

	ouncesToPounds(...ounces) {
		let result = ounces.map(ounce => ounce * 0.0625)
		if(result.length == 1) return result[0]
		return result
	}

	ouncesToKilograms(...ounces) {
		let result = ounces.map(ounce => ounce * 0.02835)
		if(result.length == 1) return result[0]
		return result
	}
}