/**
 * Created by andreajohansson on 2017-03-05.
 */


// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

 var app = require("../app");


 describe("Test getBooks", function () {

 describe("GET /api/books/", function () {

 it("respond with book catalog", function (done) {

 request(app)
 .get('/api/books/') //get api/books which contains whole catalog.
     .set('Accept', 'application/json')
     .expect('Content-Length', '7089') //check that length matches that of catalog according to header in Postman.
     .expect(200)
     .expect('Content-Type', /json/)
     .end(function(err, res){
         if (err) { return done(err); }
         done();
     });
 });
 });
 });