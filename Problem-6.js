// Problem - 6
// Problem - 6

const findShortestWord = (textString) => {
  shortText = textString.split(` `).sort((a, b) => {
    return a.length - b.length;
  })[0];
  console.log(shortText);
};

findShortestWord("The quick brown fox jumps over the lazy dog");
findShortestWord("Hello world");
findShortestWord("Today is Monday");