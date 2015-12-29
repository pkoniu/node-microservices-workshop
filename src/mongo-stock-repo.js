'use strict';

module.exports = function(books) {
    return {
        save: function(isbn, count) {
            return books.then((books) =>
                books.updateOne({'isbn': isbn},{$set:{'isbn':isbn},$inc:{'count':count}},{upsert:true})
            );
        },

        getAll: function() {
            return books.then((books) => books.find().toArray());
        },

        getByISBN: function(isbn) {
            return books.then((books) => books.find({'isbn': parseInt(isbn)}).limit(1).next());
        }
    };
};
