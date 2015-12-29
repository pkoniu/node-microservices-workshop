'use strict';

module.exports = function() {
    return {
        save: function(isbn, amount) {
            return Promise.resolve({'msg':'saved', 'isbn':isbn, 'amount':amount});
        },

        getAll: function() {
            return Promise.resolve(require('./db.json'));
        },

        getByISBN: function(isbn) {
            return Promise.resolve(require('./db_by_isbn.json'));
        },

        getCount: function(isbn) {
            return Promise.resolve(123);
        }
    };
};
