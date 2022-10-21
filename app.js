function countWords(stringOfWords) {
    // your code here
    // if input is an empty string
    if (stringOfWords === '') {
        // return empty object
        return {};
    }
    // create result count object
    var counts = {};
    // split the input string into an array of words
    var words = stringOfWords.split(' ');
    // iterate over the array of words
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
    // check if current word is not in result object
        if (counts[currentWord] === undefined) {
        // if not, instantiate current word in object with value of 1
        counts[currentWord] = 1;
    // otherwise
        } else {
        // increment value of current word in object by 1
        counts[currentWord]++;
        }
    };


    // return the result count object
    return counts;
};

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);