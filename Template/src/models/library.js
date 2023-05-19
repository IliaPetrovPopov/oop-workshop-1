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
}
