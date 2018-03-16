define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var es = require('./elasticsearch');

    var client = new es.Client({
    host: 'localhost:9200',
    log: 'trace'
    });

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    print(messages.getHello());
});