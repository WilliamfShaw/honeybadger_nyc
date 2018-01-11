function fibonacci(limit) {
    const fibonacciArray = [1, 2];
    let sumOfEvens = 2;

    for (let i = 2; i < limit; i++){
        const fibArrayLength = fibonacciArray.length;
        const secondToLastNumber = fibonacciArray[fibArrayLength - 2];
        const lastNumber = fibonacciArray[fibArrayLength - 1];
        const currentNumber = secondToLastNumber + lastNumber;
        fibonacciArray.push(currentNumber);

        if (currentNumber % 2 === 0) {
            sumOfEvens += currentNumber;
        }
    }

    return sumOfEvens;
}
