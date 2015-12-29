'use strict';

module.exports = function(repo) {
    return {
        welcome: function(req, res, next) {
            res.status(200).send("Yo!");
        },

        findByISBN: function(req, res, next) {
            repo.getByISBN(req.params.isbn)
                .then((data) => res.status(200).json(data))
                .catch(next);
        },

        findAll: function(req, res, next) {
            repo.getAll()
                .then((data) => res.status(200).json(data))
                .catch(next);
        },

        findBooksAmount: function(req, res, next) {
            repo.getCount(req.params.isbn)
                .then((data) => res.status(200).json(data))
                .catch(next);
        },

        saveBook: function(req, res, next) {
            var isbn = req.body.isbn;
            var amount = req.body.amount;

            repo.save(isbn, amount)
                .then((msg) => res.status(201).json(msg))
                .catch(next);
        },

        logReq: function(req, res, next) {
            console.log("REQUEST COMMING!!", new Date());
            next();
        },

        clientError: function(req, res, next) {
            var err = new Error("Not found");
            err.status = 404;
            next(err);
        },

        errorHandler: function(err, req, res, next) {
            var status = err.status || 500;
            console.error("DAMN", err);
            res.status(status).json({'msg': err.message});
        }
    };
};
