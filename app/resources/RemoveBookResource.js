(function (bookId) {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, callback) {
    callback(bookId);
        console.log(bookId);
    };

}());
