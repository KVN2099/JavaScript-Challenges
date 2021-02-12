function evenFibonacciSum() {
    let sum = 0;
    let prevNumber = 1;
    for (i = 0; i < 4 * 10 ** 6; i) {
        i += prevNumber;
        prevNumber = i - prevNumber;
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(evenFibonacciSum());