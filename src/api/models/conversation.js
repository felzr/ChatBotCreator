const client = require('src/config/mongoDatabase');

const Conversation = new client.Schema({
    id: {
        type: String,
        required: false
    },
    theme: {
        type: String,
        required: true
    },
    chatbot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chatbot'
    }
});

module.exports = client.model('Conversation', Conversation);