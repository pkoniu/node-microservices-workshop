module.exports = {
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    collaborators:[ 'patryk.konior@schibsted.pl','michal.misiarek@schibsted.pl','kdmadej+heroku@gmail.com' ],
    addons: {},
    features:{
        'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false }
    },
    formation: [],
    log_drains: [],
};
