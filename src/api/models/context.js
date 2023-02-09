const client = require('src/config/mongoDatabase');

const Context = new client.Schema({
    id: {
        type: String,
        required: false
    },
    contextName: {
        type: String,
        required: true
    }
});

module.exports = client.model('Context', Context);