import { libraryShelf, libraryShelf, libraryShelf } from '../../src/common/library-shelf.js';
import { Library } from '../../src/models/library.js';


describe('Library', () => {

  describe('addBook should', () => {

    it('should throw when invalid shelf is passed', () => {
      const library = new Library();

      expect(() => library.addBook({}, null)).toThrow();
      expect(() => library.addBook({}, 15)).toThrow();
      expect(() => library.addBook({})).toThrow();
    });

    it('should pass when a valid shelf value is passed', () => {
      const library = new Library();

      expect(() => library.addBook({}, 1)).not.toThrow();
      expect(() => library.addBook({}, libraryShelf.Technical)).not.toThrow();
    });

    it('should add the book to the correct shelf', () => {
      const library = new Library();
      const book = {};
      const shelf = libraryShelf.Clowns;

      library.addBook(book, shelf);

      // expect(library._shelves[1]).toBeInstanceOf(Array);
      // expect(library._shelves[1]).toContain(book);

      const printInfo = library.printBooks();

      expect(printInfo).toContain(libraryShelf[shelf]);
      expect(printInfo).toContain(book.title);
      expect(printInfo).toContain(book.pages);
      expect(printInfo).toContain(book.authors);
    });

  });

  describe('printBooks', () => {

    it('should print the correct results when no books are added', () => {
      const library = new Library();

      expect(library.printBooks()).toContain('No books added');
    });

    // it('should print the correct results when books are added', () => {
    //   const library = new Library();

    //   library._shelves = {
    //     1: [
    //       {
    //         title: 'Test book',
    //         authors: 'John Doe',
    //         pages: 111,
    //       },
    //     ],
    //   };

    //   expect(library.printBooks()).toContain('Test book');
    //   expect(library.printBooks()).toContain('John Doe');
    //   expect(library.printBooks()).toContain('111');
    // });

  });

});
