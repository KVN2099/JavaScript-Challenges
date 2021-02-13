function sumSquareDifference() {
    let n = 100;
    let sumSquares = (n * (n + 1) * (2*n + 1))/6;
    let squaredSum = ((n * (n + 1)) / 2) ** 2;
    return squaredSum - sumSquares;
}

console.log(sumSquareDifference());