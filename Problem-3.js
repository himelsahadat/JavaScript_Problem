// Problem - 3:
// Problem - 3:

const reverseString = (inputString) => {
  let text = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    text = text + inputString[i];
  }
  console.log(text);
};
reverseString("hello");
reverseString("racecar");
reverseString("12345");
