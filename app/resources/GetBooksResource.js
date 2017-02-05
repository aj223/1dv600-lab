


(function getBooks (callback) {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var books = require('../dao/books');

    var allBooks = []; //empty array for books.

    //create two books and add to array.
    var book1 = books(1, "1984", "Orwell", "fiction", "01/01/1984", 100, "dystopian fiction");
    book1.AUTHOR = "Orwell";
    allBooks.push(book1);

    var book2 = books(2, "Lord of the Rings", "Tolkien", "fantasy", "01/01/1940", 100, "fantasy classic");
    allBooks.push(book2);

    //convert list of books to JSON.
    var allBooksJSON = JSON.stringify(allBooks);

    //export function to be used in api/books.
    module.exports = function getBooks(callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)

        console.log(allBooks); //books appear in terminal when GET request to server is made.
        console.log(allBooksJSON); //same for JSON version.
        callback(allBooksJSON); //JSON object sent to server and appears in browser on localhost:9090/api/books.
    };

}());
