let Calculator = require("../calculator");

describe('Calculator', () => {
	let calc;

	beforeEach(() => {
		calc = new Calculator();
	});

	describe("#add", function () {
		it("returns sum of arguments", function () {
			let sum = calc.add(2, 2);
			expect(sum).toBe(4);
		});
	});

	describe("#subtract", function () {
		it("returns difference of arguments", function () {
			let difference = calc.subtract(5, 3);
			expect(difference).toBe(2);
		});
	});

	describe("#multiply", function () {
		it("returns product of arguments", function () {
			let product = calc.multiply(4, 5);
			expect(product).toBe(20);
		});
	});

	describe("#divide", function () {
		it("returns quotient of arguments", function () {
			let quotient = calc.divide(30, 6);
			expect(quotient).toBe(5);
		});
	});

	describe("#square", function () {
		it("returns square of arguments", function () {
			let product = calc.square(5);
			expect(product).toBe(25);
		});
	});

	describe("#exponential", function () {
		it("returns exponential value of arguments", function () {
			let product = calc.exponential(2, 3);
			expect(product).toBe(8);
		});
	});

	describe("#isGreaterThan", function () {
		it("returns the larger of the two arguments", function () {
			let value = calc.isGreaterThan(5, 17);
			expect(value).toBe(17);
		});
	});

	describe("#isNegative", function () {
		it("returns true if argument is negative", function () {
			let value = calc.isNegative(-2);
			expect(value).toBe(true);
		});
	});
});
