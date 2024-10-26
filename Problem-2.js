// Problem - 2:
// Problem - 2:

const CountPairs = (lowerLetterDigit) => {
  let number = lowerLetterDigit.match(/[a-z][02468]/g).length;
  console.log(number);
}

CountPairs("a1b2c3d4e5f6");
CountPairs("x1y2z3");
CountPairs("a2b2c2d2");
