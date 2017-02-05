/**
 * Created by andreajohansson on 2017-02-02.
 */


//function for creating a book.
function books (id, title, author, genre, publish_date, price, description) {
//object with value pairs corresponding to parameters of function.
    var aBook = {
        ID: id,
        TITLE:title,
        AUTHOR: author,
        GENRE: genre,
        PUBLISH_DATE: publish_date,
        PRICE: price,
        DESCRIPTION: description
    };
    return aBook;
}

//export book.
module.exports = books;