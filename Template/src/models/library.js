import { libraryShelf } from '../common/library-shelf.js';

export class Library {
    _shelves = {};

    addBook(book, shelf) {
      if (!Object.values(libraryShelf).includes(shelf)) {
        throw new Error('Such library shelf does not exist!');
      }

      if (!this._shelves.hasOwnProperty(shelf)) {
        this._shelves[shelf] = [];
      }
      this._shelves[shelf].push(book);
    }

    printBooks() {
      if (Object.values(this._shelves).every(shelf => !shelf.length)) {
        return ('No books added');
      }

      let existingShelves = '';
      // eslint-disable-next-line guard-for-in
      for (const shelf in this._shelves) {

        const currShelfBooks = this._shelves[shelf].reduce((books, curr) => {
          return books += `${curr.title}, by ${curr.authors}, ${curr.pages} pages\n`;
        }, `  == ${libraryShelf[shelf]} ==\n`);

        existingShelves += `${currShelfBooks}\n`;
      }

      return existingShelves;
    }
}
