function getLargestElementAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {

        var largestElement = obj[key][0];

        for (var i in obj[key]) {

            if (obj[key][i] > largestElement) {

                largestElement = obj[key][i];

            }

        }

        return largestElement;

    } else {

        return undefined;

    }
    /* END SOLUTION */
};

var obj = {
    key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4