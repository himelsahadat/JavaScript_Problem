const parseString = (...numString) => {
  if (numString.every((num) => !isNaN(num))) {
    return numString.reduce((sum, num) => sum + +num, 0); // reduce method go through every element of array and create a new array without any change of existance array and passes 4 paremeter which is current value,previous value, index and array.
  } else {
    return numString.join(" "); //join method convert an array to a string 
  }
};

console.log(parseString("21", "24", "40"));
console.log(parseString("Hello", "Alpha"));
console.log(parseString("Summer" , "2022"));
