function smallestMultiple() {
    let iterate = true;
    let array = [];
    for (let i = 1; i <= 20; i++) {
        array.push(i);
    }

    let smallest = 0;
    while (iterate) {
        smallest++;
        for (let j = 1; j <= 20; j++) {
            if (smallest % j !== 0) {
                break;
            } else if (j == 20) {
                iterate = false;
            }
        }
    }

    return smallest;
}

console.log(smallestMultiple());