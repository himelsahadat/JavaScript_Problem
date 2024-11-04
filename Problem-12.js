const arr = [2, 3, 5, 6, 7];
const getMaxProduct = (arr) => {
if ( arr.length < 2){
    return "Atleast 2 element is needed"
}

  const big = arr.sort((a, b) => a - b);
  const n = big.length;

  const maxProduct = big[n-1] * big [n -2];

//   for (let i = 0; i < big.length; i++) {
//     return big[big.length - 1] * big[big.length - 2];
//   }

return maxProduct;
};
console.log(getMaxProduct(arr));
