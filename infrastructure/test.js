var heroin = require('heroin-js');
var _ = require('lodash');

var test = {
    name: 'node-microservices-ws-test',
    config_vars: {
        MONGOLAB_URI: 'mongodb://heroku_rc6jxkln:jl60qp4df6khbm6tnh4j9139g6@ds035975.mongolab.com:35975/heroku_rc6jxkln',
        NODE_ENV: 'test'
    },
    domains: [ 'node-microservices-ws-test.herokuapp.com' ]
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator(config);
