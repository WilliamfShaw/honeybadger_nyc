function eulerSix(limit) {
    let sumOfSq = 0;
    let sum = 0;

    for(let i = 0; i <= limit; i++) {
        sumOfSq += Math.pow(i, 2);
        sum += i;
    }

    return Math.pow(sum, 2) - sumOfSq;
}

function eulerSix(limit) {
    let sqofSum = Math.pow(limit * (limit + 1) / 2, 2);
    let sumOfSq = (2 * limit + 1) * (limit +1) * limit /6;

    return sqofSum - sumOfSq;
}
