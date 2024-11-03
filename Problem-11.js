const missingArr = [1, 2, 3, 5, 7, 8];
const findMissingNumber = (missingArr) => {
  missingArr.sort((a, b) => a - b);
  const missingNumbers = [];

  for (let i = 0; i < missingArr.length; i++) {
    if (missingArr[i] !== i + 1 + missingNumbers.length) {
      missingNumbers.push(i + 1 + missingNumbers.length);
    }
  }

  return missingNumbers;
};

console.log(findMissingNumber(missingArr));
