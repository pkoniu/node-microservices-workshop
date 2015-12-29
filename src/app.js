'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

module.exports = function(repo) {
    var app = express();
    var routes = require('./routes')(repo);

    app.use(routes.logReq);
    app.use(bodyParser.json());

    app.get('/', routes.welcome);
    app.get('/stock', routes.findAll);
    app.get('/stock/:isbn', routes.findByISBN);

    app.post('/stock', routes.saveBook);

    app.use(routes.clientError);
    app.use(routes.errorHandler);

    return app;
};
