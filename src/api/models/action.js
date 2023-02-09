const client = require('src/config/mongoDatabase');

const Action = new client.Schema({
    id: {
        type: String,
        required: false
    },
    actionName: {
        type: String,
        required: true
    }
});

module.exports = client.model('Action', Action);