'use strict';

var request = require('supertest');
var assert = require('assert');

var db = require('./inMemoryStock')();
var app = require('./../src/app')(db);

describe('Book inventory should', function() {
    it('respond with hello', function(done) {
        request(app)
            .get('/')
            .expect(200, "Yo!")
            .end(function(err, res) {
                if(err) {
                    done(err);
                } else {
                    done();
                }
            });
    });

    it('respond with all books', function(done) {
        request(app)
            .get('/stock')
            .expect(200)
            .end(function(err, res) {
                if(err){
                    done(err);
                } else {
                    assert.equal(res.body[0].isbn, 123);
                    done();
                }
            });
    });

    //TODO: wat? y u no work
    // it('respond with <div> with count of book', function(done) {
    //     request(app)
    //         .get('/stock/666')
    //         .set('Accept', 'text/html')
    //         .expect(200)
    //         .end(function(err, res) {
    //             if(err) {
    //                 done(err);
    //             } else {
    //                 assert.equal(res.body, '<div>123 copies left</div>');
    //                 done();
    //             }
    //         });
    // });

    it('respond with msg when saving to db', function(done) {
        request(app)
            .post('/stock')
            .set('Content-Type', 'application/json')
            .send({isbn: 123, count: 10})
            .expect(201)
            .end(function(err, res) {
                if(err) {
                    done(err);
                } else {
                    assert.equal(res.body.msg, 'saved');
                    done();
                }
            });
    });
});
