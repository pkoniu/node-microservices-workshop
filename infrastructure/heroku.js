var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator.export('node-microservices-ws').then(function(result) {
	console.log(result);
});

configurator({
	name: 'node-microservices-ws-test',
	region: 'eu',
	stack: 'cedar-14',
	config_vars: { MONGOLAB_URI: 'mongodb://heroku_4x78mgjj:5c76vmaot6lpjfdubl2k6f1qc4@ds033285.mongolab.com:33285/heroku_4x78mgjj' },
	collaborators:[ 'kdmadej+heroku@gmail.com', 'patryk.konior@schibsted.pl', 'michal.misiarek@schibsted.pl' ]
});
