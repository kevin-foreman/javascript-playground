function computeProductOfAllElements(arr) {
    // your code here

    var productResult = 1;

    for (var i = 0; i < arr.length; i++) {

        productResult *= arr[i];

    }
    if (arr.length > 0) {
        
        return productResult;

    } else {

        return 0;

    }
};

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60