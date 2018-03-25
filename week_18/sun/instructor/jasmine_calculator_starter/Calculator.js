class Calculator {
	constructor() {}

  add(num1, num2){
    return num1 + num2;
  }

  subtract(num1, num2) {
  	return num1 - num2;
  }

  multiply(num1, num2) {
  	return num1 * num2;
  }

  divide(num1, num2) {
  	return(num1/num2);
  }

  square(num) {
  	return Math.pow(num, 2);
  }

  exponential(num1, num2) {
  	return Math.pow(num1, num2);
  }

  isGreaterThan(num1, num2) {
  	return Math.max(num1, num2);
  }

  isNegative(num) {
  	return 0 > num;
  }
}

module.exports = Calculator;