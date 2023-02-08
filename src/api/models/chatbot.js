const client = require('src/config/mongoDatabase');

const Chatbot = new client.Schema({
    id: {
        type: String,
        required: false
    },
    persona: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    }
});

module.exports = client.model('Chatbot', Chatbot);