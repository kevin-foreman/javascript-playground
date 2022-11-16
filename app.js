function squareElements(arr) {
    // your code here

    var squareArr = [];

    for (var i = 0; i < arr.length; i++) {

        squareArr.push(Math.pow(arr[i], 2));

        // return squareArr;

    }
    return squareArr;
};

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]