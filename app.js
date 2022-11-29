function fromListToObject(array) {
  // your code here
  var newObject = {};
  for (var i = 0; i < array.length; i++) {
    newObject[array[i][0]] = array[i][1];
  }
  return newObject;
};

var output = fromListToObject([['make', 'Toyota'], ['model', 'Tundra'], ['year', 2023]]);
console.log(output); // ==> { make : 'Toyota', model : 'Tundra', year : 2023 }