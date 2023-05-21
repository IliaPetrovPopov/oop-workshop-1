import { bookGenre } from '../common/book-genre.js';

export class Book {
    #title;
    #genre;
    #pages;
    #authors;

    static #MAX_TITLE_LENGTH = 255;
    static #MIN_TITLE_LENGTH = 1;
    static #MIN_PAGES = 1;

    static #MIN_SYMBOLS_FOR_AUTHOR = 1;
    static #MAX_SYMBOLS_FOR_AUTHOR = 40;
    static #MIN_AUTHORS = 1;

    constructor(title, genre, pages, authors) {
      this.title = title;
      this.genre = genre;
      this.pages = pages;
      this.authors = authors;
    }

    get title() {
      return this.#title;
    }

    set title(value) {
      if (!value) {
        throw Error('Invalid value!');
      }

      if (value.length < Book.#MIN_TITLE_LENGTH || value.length > Book.#MAX_TITLE_LENGTH) {
        throw Error(`Title length should be between ${Book.#MIN_TITLE_LENGTH} and ${Book.#MAX_TITLE_LENGTH}] symbols!` );
      }

      this.#title = value;
    }

    get genre() {
      return this.#genre;
    }

    set genre(value) {

      if (!value) {
        throw new Error('Value must be valid!');
      }

      if (!Object.values(bookGenre).includes(value)) {
        throw new Error('Book genre not found!');
      }

      this.#genre = value;
    }

    get pages() {
      return this.#pages;
    }

    set pages(value) {
      if (value < 1) {
        throw new Error(`Value must be more than ${Book.#MIN_PAGES}!`);
      }

      if (value % 1 !== 0) {
        throw new Error('Value is not whole number!');
      }

      this.#pages = value;
    }

    get authors() {
      return this.#authors;
    }

    set authors(allAuthors) {
      const filtered = allAuthors.split(',').filter(x => x).map(element => element.trim()).join(',');
      if (filtered.length === 0) {
        throw new Error(`At least ${Book.#MIN_AUTHORS} author must be written!`);
      }

      if (filtered.length < Book.#MIN_SYMBOLS_FOR_AUTHOR || filtered.length > Book.#MAX_SYMBOLS_FOR_AUTHOR) {
        throw new Error(`Name of the author must be between ${Book.#MIN_SYMBOLS_FOR_AUTHOR} and ${Book.#MAX_SYMBOLS_FOR_AUTHOR}!`);
      }

      this.#authors = filtered;
    }
}
