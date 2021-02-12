function largestPrimeFactor() {
    let number = 600851475143;
    let prime = 0;
    for (let i = 3; i <= number/2; i = i + 2) {
        while (number % i == 0) {
            prime = i;
            number = number / i;
        }
    }
    if (number > 2) {
        prime = number;
    }
    return prime;
}

console.log(largestPrimeFactor());