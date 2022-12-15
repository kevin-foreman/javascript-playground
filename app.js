function assertEqual(actual, expected, testName) {
    // psuedo code here
    // actual will be a scalar value (singular value or unit like integer, boolean, or string)
    // expected, also scalar, the theoretical result of calling the function
    // testName will be a string and will describe what a call to assertEqual is verifying about the function being tested
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED ' + [testName] + ' Expected ' + expected + ', but got ' + actual);
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
};

function square(x) {
    return x * x;
}

// Tests
assertEqual(square(2), 4, "square of 2"); // ==> 'passed'
assertEqual(square(3), 9, "square of 3"); // ==> 'passed'
assertEqual(square(4), 16, "square of 4"); // ==> 'passed'
assertEqual(square(5), 30, "square of 5"); // ==> 'FAILED square of 5 Expected 30 but got 25'