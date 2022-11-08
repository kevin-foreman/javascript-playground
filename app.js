function getElementsThatEqual10AtProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    var myNewArr = [];
    // check if a key exists on the object
    if (obj[key]) {
        // loop through the object at each key
        for (var i in obj[key]) {
            // check for deep equality to 10 at each index of the key values
            if (obj[key][i] === 10) {
                // once found use the .push method to populate our earlier created empty array
                myNewArr.push(obj[key][i]);

            }

        }
        return myNewArr;

    }

    return myNewArr;

    /* END SOLUTION */
};

var obj = {
    key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]