function applySlice(array, start, end) {
    // create a sliceOfArray variable
    // assign it to a portion of the array from before start, up to, but not including end
    const sliceOfArray = array.slice(start, end);
    // return the sliceOfArray variable
    return sliceOfArray;
};

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2);