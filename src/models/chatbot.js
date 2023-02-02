const client = require('src/config/mongoDatabase');

const Chatbot = new client.Schema({
    name: {
        type: String,
        required: true
    },
    cliente: {
        type: String,
        required: true
    }
});

module.exports = client.model('Chatbot', Chatbot);