function getElementOfArrayProperty(obj, key, index) {
    // your code here
    /* START SOLUTION */

    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key]) && obj[key].length > 0)) {

        var arr = obj[key];

        return arr[index];

    } else {

        return undefined;

    }

    /* END SOLUTION */
};

var obj = {
    key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'