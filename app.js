function computeSumOfAllElements(numbers) {
    // if input is empty, what do we return? (edge case)
    if (numbers.length === 0) {
        return 0;
    }
    // output is the sum of all the numbers
    var sumOfNumbers = 0;

    // iterate over the entire input array
    for (var i = 0; i < numbers.length; i++) {
        // check if current number is greater than zero
        if (numbers[i] > 0) {
            // add numbers together
            sumOfNumbers = sumOfNumbers + numbers[i];
        }

    }

    // return result variable
    return sumOfNumbers;
};

var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);