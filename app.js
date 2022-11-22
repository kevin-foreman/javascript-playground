function sumDigits(num) {
    // your code here

    var num = num.toString();

    var sum = 0;

    if (num[0] === '-') {

        for (var i = 2; i < num.length; i++) {

            sum += Number(num[i]);

        }

            sum += -Number(num[1])

            return sum;

    } else {

        for (var i = 0; i < num.length; i++) {

            sum += Number(num[i]);

        }

        return sum;

    }

};

// var output = sumDigits(1148);
// console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4