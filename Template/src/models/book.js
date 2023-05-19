import { bookGenre } from '../common/book-genre.js';

export class Book {
    #title;
    #genre;
    #pages;
    #authors;

    static #MAX_TITLE_LENGTH = 255;
    static #MIN_TITLE_LENGTH = 1;
    static #MIN_PAGES = 1;

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
}
