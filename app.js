'use strict';

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/microservices_workshop_db';

var db = MongoClient.connect(url);

var books = db.then(function(db) {
    return db.collection("books");
});

var repo = require('./mongo-stock-repo')(books);

var app = require('./server')(repo);

var PORT_NO = process.env.PORT || 3000;

var server = app.listen(PORT_NO, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
