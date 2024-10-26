// Problem - 8
// Problem - 8

const bookTitles = [];
const authorNames = [];
const copiesAvailable = [];

const createBookList = (bookTitle, authorName, numberofCopies) => {
  bookTitles.push(bookTitle);
  authorNames.push(authorName);
  copiesAvailable.push(numberofCopies);
};
const addCopies = (bookTitle, copiesAdd) => {
  const index = bookTitles.indexOf(bookTitle);
  if (index !== -1) {
    
    copiesAvailable[index] = copiesAdd + copiesAvailable[index];

  } else console.log("Book Not Found");
};

const sellBook = (bookTitle, copiesSold) => {
  const indexSell = bookTitles.indexOf(bookTitle);
  if (indexSell !== -1) {
    if (copiesAvailable[indexSell] >= copiesSold) {
      copiesAvailable[indexSell] = copiesAvailable[indexSell] - copiesSold;
    } else console.log("Out of Stock");
  } else console.log("Book Not Available");
};
const getDetails = () => {
  for (let i = 0; i < bookTitles.length; i++) {
    console.log(
      `"${bookTitles[i]}" by "${authorNames[i]}" - Copies available: ${copiesAvailable[i]}`
    );
  }
};

createBookList("Bohubrihi", "Humayun Ahmed", 10);
createBookList("Bohur", "Kabi Nazrul", 90);
addCopies("Bohubrihi", 5);
addCopies("Bohur", 2);
sellBook("Bohubrihi", 3);
sellBook("Bohur", 4);
getDetails();

