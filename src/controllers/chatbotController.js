const Chatbot = require('../models/chatbot');

module.exports = {
    async index(req, res) {
        const chatbots = await Chatbot.find();
        return res.json(chatbots);
    },
    async show(req, res) {
        const chatbot = await Chatbot.findById(req.params.id);
        return res.json(chatbot);
    },
    async store(req, res) {
        const chatbot = await Chatbot.create(req.body);
        return res.json(chatbot);
    },
    async update(req, res) {
        const chatbot = await Chatbot.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(chatbot);
    },
    async destroy(req, res) {
        await Chatbot.findByIdAndRemove(req.params.id);

        return res.send();
    }
};