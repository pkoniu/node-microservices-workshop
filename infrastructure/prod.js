var heroin = require('heroin-js');
var _ = require('lodash');

var prod = {
    name: 'node-microservices-ws',
    config_vars: { MONGOLAB_URI: 'mongodb://heroku_rc6jxkln:jl60qp4df6khbm6tnh4j9139g6@ds035975.mongolab.com:35975/heroku_rc6jxkln' },
    domains: [ 'node-microservices-ws.herokuapp.com' ]
};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator(config);
