function filterOddLengthWords(words) {
    // your code here
    /* START SOLUTION */

    var oddWords = [];

    if (Array.isArray(words) === false || words.length === 0) {

        return oddWords;

    } else {

        var oddWords = words.filter(function (x) {
            return x.length % 2 !== 0
        })

    };

    return oddWords;

    /* END SOLUTION */
};

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']