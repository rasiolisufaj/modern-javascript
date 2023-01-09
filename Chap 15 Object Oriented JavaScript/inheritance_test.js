class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  description() {
    console.log(`${this.title} written by ${this.author} costs $${this.price}`);
    return this;
  }

  updateBook() {
    console.log(`${this.title} updated recently`);
    return this;
  }
}

class Admin extends Book {
  showBook(booksArray) {
    console.log("Books lower than $10 are listed below: ");
    books = booksArray.filter((b) => {
      return b.price < 10;
    });
  }
  deleteBook(book) {
    books = books.filter((b) => {
      return book != b;
    });
  }
}

const bookOne = new Book("Harry Potter", "J.K Rowling", 12);
const bookTwo = new Book("Tom Soyer", "A.T Welling", 15);
const bookThree = new Book("Mickey Mouse", "Jimmy Neutron", 8);
const bookFour = new Book("Tom Jerry", "Ngop TV", 9.5);
const bookFive = new Book("South Park", "Cmendina", 7.5);
const libraryAdmin = new Admin("Library Admin", "Jack01");

let books = [bookOne, bookTwo, bookThree, bookFour, bookFive];

libraryAdmin.deleteBook(bookThree);

libraryAdmin.showBook(books);

console.log(books);

bookOne.updateBook().description();
bookThree.description();
bookFive.description();
