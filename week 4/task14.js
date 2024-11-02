function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book('Good Omnes', 'Neil Gaimen', 1990);
const book2 = new Book('1984', 'George Orwell', 1949);

console.log(book1);
console.log(book2);
