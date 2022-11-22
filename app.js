function findSmallestNumberAmongMixedElements(arr) {
    // your code here

    if (arr.length < 1) {

        return 0;

    }

    var myArr = [];

    for (var i in arr) {

        if (typeof arr[i] === "number") {

            myArr.push(arr[i]);

        }

    }

    if (myArr.length < 1) {

        return 0;

    }

    var smallestNum = myArr[0];

    for (var i in myArr) {

        if (myArr[i] < smallestNum) {

            var smallestNum = myArr[i]

        }

    }

    return smallestNum;

};

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4