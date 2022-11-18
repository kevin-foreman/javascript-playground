function computeSumOfAllElements(arr) {
    // your code here

    var sumResult = 0;

    for (var i = 0; i < arr.length; i++) {

        sumResult += arr[i];

    }
    if (arr.length > 0) {

        return sumResult;

    } else {

        return 0;

    }
};

// var output = computeSumOfAllElements([4, 4, 4])
var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6