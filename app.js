function getAllButLastElementOfProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key]) && obj[key].length > 0)) {

        var arr = obj[key];

        return arr.slice(0, arr.length - 1);

    } else {

        return [];

    }

    /* END SOLUTION */
};

var obj = {
    key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]