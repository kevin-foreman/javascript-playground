function getOddLengthWordsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    if (Array.isArray(obj[key]) === false || obj[key].length === 0) {

        return [];

    }

    var oddLengthWords = obj[key].filter(function (x) {
        return x.length % 2 !== 0
    })

    return oddLengthWords;

    /* END SOLUTION */
};

var obj = {
    key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']