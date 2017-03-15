/**
 * Created by andreajohansson on 2017-03-05.
 */

// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Edit a  book", function () {

    describe("POST /api/books/1", function () {

        it("respond with 1", function (done) {

            request(app)
                .post('/api/books/1') // post to book id 1.
                .send({book: 'Test book'}) //send test object.
                .set('Accept', 'application/json')
                .expect('Content-length', '1') //expect content length 1 as callback is set to be the same as the id.
                .expect(200, "1"
                    ,done);

        });
    });
});
