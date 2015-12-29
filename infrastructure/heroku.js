var heroin = require('heroin-js');
var _ = require('lodash');

var config = _.merge({}, require('./base'), require('./test'));

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator(config);




/*
configurator.export('node-microservices-ws').then(function(result) {
	console.log(result);
});

configurator.export('node-microservices-ws-test').then(function(result) {
	console.log(result);
});
*/

/*
configurator({
	name: 'node-microservices-ws-test',
	region: 'eu',
	stack: 'cedar-14',
	config_vars: { MONGOLAB_URI: 'mongodb://heroku_4x78mgjj:5c76vmaot6lpjfdubl2k6f1qc4@ds033285.mongolab.com:33285/heroku_4x78mgjj' },
	collaborators:[ 'kdmadej+heroku@gmail.com', 'patryk.konior@schibsted.pl', 'michal.misiarek@schibsted.pl' ]
});
*/
