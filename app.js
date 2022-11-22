function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length < 1) {

        return "";

    }

    var myArr = [];

    for (var i in arr) {

        if (typeof arr[i] === "string") {

            myArr.push(arr[i]);

        }

    }

    if (myArr.length < 1) {

        return "";

    }

    var longestStr = myArr[0];

    for (var i in myArr) {

        if (myArr[i].length > longestStr.length) {

            var longestStr = myArr[i]

        }

    }

    return longestStr;
};

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'