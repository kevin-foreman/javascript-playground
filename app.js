function applyConcat(array1, array2) {
    // create a concattedArray variable
    // assign it to the contents of both array1 and array2
    const catArr = array1.concat(array2);
    // return the concattedArray variable
    return catArr;
};

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);