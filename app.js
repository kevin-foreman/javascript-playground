function getProductOfAllElementsAtProperty(obj, key) {
    // your code here

    var product = 1;

    for (var i in obj[key]) {

        product *= obj[key][i];

    }

    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key])) && (obj[key].length > 0)) {

        return product;

    } else  {

        return 0;

    }

};

var obj = {
    key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24