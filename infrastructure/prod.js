var heroin = require('heroin-js');
var _ = require('lodash');

var prod = {
    name: 'node-microservices-ws',
    config_vars: { MONGOLAB_URI: 'mongodb://heroku_4x78mgjj:5c76vmaot6lpjfdubl2k6f1qc4@ds033285.mongolab.com:33285/heroku_4x78mgjj' },
    domains: [ 'node-microservices-ws.herokuapp.com' ]
};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator(config);
