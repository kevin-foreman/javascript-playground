function getLargestElement(arr) {
    // your code here

    if (arr.length === 0) {

        return 0;

    } else {

        var largestElem = arr[0];

        for (var i in arr) {

            if (arr[i] > largestElem) {

                largestElem = arr[i];

            }

        }

        return largestElem;

    };

};

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;