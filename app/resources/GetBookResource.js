(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    var xmlBooks = LibraryDAO.readXMLFile();
    var testBook = JSON.parse(xmlBooks);
    var parsedBook = "parsedBook";


    console.log("testing getbook " + testBook["catalog"]);



    module.exports = function (id, callback) {
        var testCont = xmlBooks;
        if(id==1) {
          testCont = "test";
        }
        callback(id);

    };

}());
