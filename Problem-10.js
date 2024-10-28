const num = [2, -5, 10, -3, 8, -1, 0, 7];
const posiNum = [];
const getPositiveNumbers = (num) => {
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      posiNum.push(num[i]);
    }
  }
};
getPositiveNumbers(num);
console.log(posiNum);
