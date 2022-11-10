function keep(array, keeper) {
    // your code here
    /* START SOLUTION */

    return array.filter(function (numbersToKeep) {
        return numbersToKeep === keeper;
    });

    /* END SOLUTION */
};

var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]