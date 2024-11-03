const triangle = (numRows) => {
  for (let i = 1; i <= numRows; i++) {
    let str = "*";
    let space = " ";
    console.log(space.repeat(numRows - i) + str.repeat(i));
  }
};

triangle(5);
