function joinArrayOfArrays(arr) {
    // your code here

    var joinedArr = arr.flat();

    return joinedArr;

};

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']