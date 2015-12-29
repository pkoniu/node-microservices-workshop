var heroin = require('heroin-js');
var _ = require('lodash');

var test = {
    name: 'node-microservices-ws-test',
    config_vars: {
        MONGOLAB_URI: 'mongodb://heroku_4x78mgjj:5c76vmaot6lpjfdubl2k6f1qc4@ds033285.mongolab.com:33285/heroku_4x78mgjj',
        NODE_ENV: 'test' 
    },
    domains: [ 'node-microservices-ws-test.herokuapp.com' ]
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator(config);
