// Problem - 4:
// Problem - 4:

const reverseString = (inputString) => {
  let text = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    text = text + inputString[i];

  }
if ( text == inputString){
 console.log("true");

}
else {
  console.log("false");

}
  console.log(text == inputString);

  return text == inputString;

};

reverseString("racecar");