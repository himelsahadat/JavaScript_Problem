// Problem - 7
// Problem - 7
const studentNames = [
  "Zara",
  "Sadia",
  "Mahin",
  "Adnan",
  "Maisha",
  "Adnan",
  "Faiyaz",
];

const removeDuplicate = (studentNames) => {
  dupli = studentNames.filter((item, index) => {
   return studentNames.indexOf(item) == index;
  });
  return dupli;
};

console.log(removeDuplicate(studentNames));