function computeAverageOfNumbers(nums) {
    // your code here
    /* START SOLUTION */

    var sum = 0;

    if (nums.length === 0) {

        return 0;

    } else {
        for (var i =0; i < nums.length; i++) {

        sum += nums[i];

        };
    };

    var avg = sum / nums.length;

    return avg;

    /* END SOLUTION */
};

// var input = [];
var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3