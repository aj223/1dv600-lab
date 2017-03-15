/**
 * Created by andreajohansson on 2017-03-05.
 */

// API documentation - https://github.com/visionmedia/supertest


var request = require('supertest');

 var app = require("../app");


 describe("Add a book", function () {

 describe("PUT /api/books/", function () { //put to api/books.

 it("respond with empty object", function (done) {

 request(app)

 .put('/api/books')
 .set('Accept', 'application/json')
     .expect(200, { //response should be empty object.
 },done);

 });
 });
 });

