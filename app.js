function removeElement(array, discarder) {
    // your code here
    /* START SOLUTION */

    return array.filter(function (numbersToKeep) {
        return numbersToKeep !== discarder;
    });

    /* END SOLUTION */
};

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]