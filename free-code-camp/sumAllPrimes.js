function sumPrimes(num) {
    console.log('isPrime ->', isPrime(num));
    let primerNumbers = []
    let primerNumbersSum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primerNumbers.push(i);
            primerNumbersSum += i;
        }
    }
    console.log('primerNumbers ->', primerNumbers);
    console.log('primerNumbersSum =>', primerNumbersSum);
    return primerNumbersSum;
}

function isPrime(num) {
    let divisiblesArray = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisiblesArray.push(i);
        }
    }
    return divisiblesArray.length > 2 ? false : true;
}
// 1,2,3,5,7
sumPrimes(10);
sumPrimes(977);
// sumPrimes(7);
// sumPrimes(13);