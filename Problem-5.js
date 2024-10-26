// Problem - 5:
// Problem - 5:

const mergeArrays = (firstArray, secArray) => {
  console.log(
    firstArray.concat(secArray).sort((a, b) => {
      return a - b;
    })
  );
arr = firstArray.concat(secArray);
arrSort = arr.sort(function (a, b) {
  return a - b;
});
console.log(arrSort);
};
mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]);
mergeArrays([1, 2, 3], [4, 5, 6]);
