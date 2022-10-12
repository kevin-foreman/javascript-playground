function applyIndexOfToArray(array, element) {
    // create an index variable
    // assign it to the index inside of array where element can be found
    const index = array.indexOf(element);
    // return the index variable
    return index;
};  

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2);