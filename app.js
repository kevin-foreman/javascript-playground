// This one loops over an array of objects (Spoiler alert, very common!)
// Does it behave the way you anticipated?

function loopAnArrayOfObjects(arrayOfObjects) {
  // create a loop which iterates over the input array
    // create an inner loop which iterates over current inner object
    for (var i = 0; i < arrayOfObjects.length; i++) {
      var innerObj = arrayOfObjects[i];
  for (var key in innerObj) {
    console.log(innerObj[key]);
  }
};
      // log current value to the console
};

loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e


  // var arrayOfObjects = [
  //   {a: 1, b: 2, c: 3},
  //   {d: 4, e: 5, f: 6},
  //   {g: 7, h: 8, i: 9}
  // ];
  
  // for (var i = 0; i < arrayOfObjects.length; i++) {
  //   for (var key in arrayOfObjects[i]) {
  //     console.log(arrayOfObjects[i][key]);
  //   }
  // };
  
  // // console.log(arrayOfObjects[0].b);
  