function largestPalindromeProduct() {
    // Largest product of 3-digit numbers: 999 x 999 = 998,001
    // Smallest product of 3-digit numbers: 100 x 100 = 10,000
    let product = 0;
    let largest = 0;
    for (let i = 100; i < 999; i++) {
        for (let j = 100; j < 999; j++) {
            product = j * i;
            if (product.toString().split("").reverse().join("") == product && product > largest) {
                largest = product;
            }
        }
    }
    return largest;
}

console.log(largestPalindromeProduct());