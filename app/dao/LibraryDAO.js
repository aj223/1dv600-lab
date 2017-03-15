(function () {
    "use strict";

    var fs = require('fs');
    var util = require('util');




    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function (callback) {

            var outputBooks = ""; // var for saving converted content.


            var parseString = require('xml2js').parseString; //use parseString function of xml2js.

            var text = fs.readFileSync('./books.xml','utf8'); //read file from system.

            parseString(text,{explicitArray: true} ,function (err, result) { // convert file content to js object.

                outputBooks = util.inspect(result, false, null); // display at level where all text is visible, not just "object"

                console.log(JSON.stringify(outputBooks)); // check that conversion works using console.log.

            });

return JSON.stringify(outputBooks); //make function return converted books.
        },

        // Write the entire file from the file system.
        writeXMLFile: function (data) {

        }

    };

    module.exports = LibraryDAO;

}());
