const expect = require('chai').expect
const Converter = require('..').default

describe('#Converter', function() {

	//converting pounds
	it('converting from 1 pound to ounces: Converter.poundsToOunces(1)', function() {
		const converter = new Converter()

		let arr = converter.poundsToOunces(1)
		expect(arr).to.equal(16)
	})

	it('converting from 1 and 2 pounds to ounces: Converter.poundsToOunces(1,2)', function() {
		const converter = new Converter()

		let arr = converter.poundsToOunces(1,2)
		expect(arr[0]).to.equal(16)
		expect(arr[1]).to.equal(32)
	})

	it('converting from 1 pounds to Kilograms: Converter.poundsToKilograms(1)', function() {
		const converter = new Converter()

		let arr = converter.poundsToKilograms(1)
		expect(arr).to.equal(0.453592)
	})

	it('converting from 1 and 2 pounds to Kilograms: Converter.poundsToKilograms(1,2)', function() {
		const converter = new Converter()

		let arr = converter.poundsToKilograms(1,2)
		expect(arr[0]).to.equal(0.453592)
		expect(arr[1]).to.equal(0.907184)
	})
	
	//converting Kilograms
	it('converting from 1 Kilograms to Pounds: Converter.kilogramsToPounds(1)', function() {
		const converter = new Converter()

		let arr = converter.kilogramsToPounds(1)
		expect(arr).to.equal(2.204623)
	})

	it('converting from 1 and 2 Kilograms to Pounds: Converter.kilogramsToPounds(1, 2)', function() {
		const converter = new Converter()

		let arr = converter.kilogramsToPounds(1,2)
		expect(arr[0]).to.equal(2.204623)
		expect(arr[1]).to.equal(4.409246)
	})

	it('converting from 1 Kilograms to Pounds: Converter.kilogramsToOunces(1)', function() {
		const converter = new Converter()

		let arr = converter.kilogramsToOunces(1)
		expect(arr).to.equal(35.27396)
	})

	it('converting from 1 and 2 Kilograms to Pounds: Converter.kilogramsToOunces(1, 2)', function() {
		const converter = new Converter()

		let arr = converter.kilogramsToOunces(1,2)
		expect(arr[0]).to.equal(35.27396)
		expect(arr[1]).to.equal(70.54792)
	})

	//converting Ounces
	it('converting from 1 Ounces to Pounds: Converter.ouncesToPounds(1)', function() {
		const converter = new Converter()

		let arr = converter.ouncesToPounds(1)
		expect(arr).to.equal(0.0625)
	})

	it('converting from 1 and 2 Ounces to Pounds: Converter.ouncesToPounds(1,2)', function() {
		const converter = new Converter()

		let arr = converter.ouncesToPounds(1,2)
		expect(arr[0]).to.equal(0.0625)
		expect(arr[1]).to.equal(0.125)
	})

	it('converting from 1 Ounces to Kilograms: Converter.ouncesToKilograms(1)', function() {
		const converter = new Converter()

		let arr = converter.ouncesToKilograms(1)
		expect(arr).to.equal(0.02835)
	})

	it('converting from 1 and 2 Ounces to Kilograms: Converter.ouncesToKilograms(1,2)', function() {
		const converter = new Converter()

		let arr = converter.ouncesToKilograms(1,2)
		expect(arr[0]).to.equal(0.02835)
		expect(arr[1]).to.equal(0.0567)
	})

	
})