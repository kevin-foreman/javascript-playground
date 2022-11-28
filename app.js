function computeFactorialOfN(n) {
  // your code here

  // var factorial = 0;

  if (n === 0 || n === 1) {
    return 1;
  }

  for (var i = n - 1; i >= 1; i--) {

    n = n * i;

  }

  return n;

};

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24