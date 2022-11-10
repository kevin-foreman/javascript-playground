function getAverageOfElementsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    var sum = 0;

    if (obj[key].length === 0 || Array.isArray (obj[key]) === false) {

        return 0;

    } else {
        for (var i = 0; i < obj[key].length; i++) {

            sum += obj[key][i];

        };
    };

    var avg = sum / obj[key].length;

    return avg;
    /* END SOLUTION */
};

var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2