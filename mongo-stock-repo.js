'use strict';

module.exports = function(books) {
    return {
        save: function(isbn, amount) {
            return books.then((books) =>
                books.updateOne(
                    {'isbn': isbn},
                    {$set:{'isbn':isbn,'amount':amount}},
                    {upsert:true})
                );
        },

        getAll: function() {
            return books.then((books) => books.find().toArray());
        },

        getByISBN: function(isbn) {
            return books.then((books) => books.find({'isbn': parseInt(isbn)}).limit(1).next());
        },

        getCount: function(isbn) {
            return books.then((books) => books.find({'isbn': parseInt(isbn)}).limit(1).next())
                        .then((result) => result.amount || null);
        }
    };
};
