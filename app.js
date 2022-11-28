function computeSummationToN(n) {
  // your code here

  var sum = 0;

  for (let i = 0; i <= n; i++) {

    sum = sum + i;

  }

  return sum;

};

var output = computeSummationToN(6);
console.log(output); // --> 21