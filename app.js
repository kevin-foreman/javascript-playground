function getSumOfAllElementsAtProperty(obj, key) {
    // your code here

    var sumResult = 0;

    for (var i in obj[key]) {

        sumResult += obj[key][i];

    }
    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key])) && (obj[key].length > 0)) {

        return sumResult;

    } else {

        return 0;

    }

};

var obj = {
    key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13