const client = require('src/config/mongoDatabase');

const Intent = new client.Schema({
    id: {
        type: String,
        required: false
    },
    tag: {
        type: String,
        required: true
    },
    pattern: {
        type: String,
        required: false
    },
    responses: {
        type: String,
        required: false
    },
    contextSet: {
        type: String,
        required: false
    },
    contextFilter: {
        type: String,
        required: false
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    }
});

module.exports = client.model('Intent', Intent);