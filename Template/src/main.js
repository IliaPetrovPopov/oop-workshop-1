import { bookGenre } from './common/book-genre.js';
import { libraryShelf } from './common/library-shelf.js';
import { Book } from './models/book.js';
import { Library } from './models/library.js';

const book1 = new Book('IT', bookGenre.Horror, 1138, 'Steven King');
const book2 = new Book('Startide Rising', bookGenre.SciFi, 124, 'David Brin');

const library = new Library();

library.addBook(book1, libraryShelf.Clowns);
library.addBook(book2, libraryShelf.Unclassified);


console.log(library.printBooks());
