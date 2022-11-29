function convertObjectToList(obj) {
  // your code here
  var listResult = [];
  for (var i in obj) {
    var keyValuePair  = [];
    keyValuePair.push(i, obj[i]);
    listResult.push(keyValuePair)
  }
  return listResult;
};

var output = convertObjectToList({
  name: 'Kevin',
  age: 42,
  role: 'Developer'
});
console.log(output); // ==> [['name', 'Kevin'], ['age', 42], ['role', 'Developer']]