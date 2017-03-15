/**
 * Created by andreajohansson on 2017-03-05.
 */

// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Test delete book", function () {

    describe("DELETE /api/books/8", function () {

        it("", function (done) {

            request(app)
                .del('/api/books/1')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect({})
                .end(function(err, res){
                    if (err) { return done(err); }
                    done();
                });
        });
    });
});
