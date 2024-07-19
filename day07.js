// Task 1
const book = {
  title: "JS Challenge",
  author: "Aryan",
  year: 2024,
};
console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);
console.log(book.year);

// Task 3
book.titleAndAuthor = function () {
  return `Book's title is ${this.title} and it's written by ${this.author}`;
};

let result = book.titleAndAuthor();
console.log(result);

// Task 4
book.updateBookYear = function (year) {
  this.year = year;
};

book.updateBookYear(2045);
console.log(book);

// Task 5
const library = {
  name: "Library",
  books: [book, book],
};

console.log(library);

// Task 6
console.log(library.name);
library.books.forEach((book) => console.log(book.title));

// Task 7
book.booksYear = function () {
  return `${this.title} is wrote in year ${this.year}`;
};

result = book.booksYear();
console.log(result);

// Task 8
for (const key in book) {
  console.log(`${key} = ${book[key]}`);
}

// Task 9
const keyArr = Object.keys(book);
const valueArr = Object.values(book);

console.log(keyArr);
console.log(valueArr);

keyArr.forEach((key) => console.log(key));
valueArr.forEach((value) => console.log(value));
