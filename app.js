function getLengthOfShortestElement(arr) {
    // your code here

    if (arr.length === 0) {

        return 0;

    } else {

    for (var i = 0; i < arr.length; i++) {

        var lengthOfShortestElement = arr[0].length;

        if (arr[i].length < lengthOfShortestElement) {

            var lengthOfShortestElement = arr[i].length;

        }; 

    };

};

return lengthOfShortestElement;
};

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3