/**
 * Created by andreajohansson on 2017-03-04.
 */

// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Search for book", function () {

    describe("GET /api/books/1", function () {

        it("respond with 1", function (done) {

            request(app)
                .get('/api/books/1') //get particular book.
                .set('Accept', 'application/json')
                .expect('Content-length', '1') //callback is set to match id. This should be the response body.
                .expect(200, "1"
                ,done);

        });
    });
});
