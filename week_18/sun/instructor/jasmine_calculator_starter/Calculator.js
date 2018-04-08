class Calculator {
	add(a, b) {
		return a + b;
	}

	subtract(a, b) {
		return a - b;
	}

	multiply(a, b) {
		return a * b;
	}

	divide(a, b) {
		return a / b;
	}

	square(a) {
		return Math.pow(a, 2);
	}

	exponential(a, b) {
		return Math.pow(a, b);
	}

	isGreaterThan(a, b) {
		return Math.max(a, b);
	}

	isNegative(a) {
		return 0 > a;
	}
}

module.exports = Calculator;
