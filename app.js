function findShortestElement(arr) {
    // your code here

    if (arr.length === 0) {

        return "";

    } else {

        var shortestElem = arr[0];

        for (var i in arr) {

            if (arr[i].length < shortestElem.length) {

                shortestElem = arr[i];

            }

        }

        return shortestElem;

    };

};

var output = findShortestElement([]);
// var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'