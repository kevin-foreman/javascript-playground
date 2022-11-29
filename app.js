function isOddWithoutModulo(num) {
  if((num & 1) == 0){
    return false
  } else {
    return true
  }
};

var output = isOddWithoutModulo(16);
console.log(output); // --> true