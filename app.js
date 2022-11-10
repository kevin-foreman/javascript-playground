function getOddElementsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    var oddElem = [];

    if (Array.isArray(obj[key]) === false || obj[key].length === 0) {

        return oddElem;

    } else {
        var oddElem = obj[key].filter(function (x) {

            return x % 2 !== 0

        });

        return oddElem;

    }

    /* END SOLUTION */
};

var obj = {
    key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]