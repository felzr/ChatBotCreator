const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://felzr:gsZIxggXMNy8I2K0@cluster0.a4bntzs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
client.connect(err => {
    const collection = client.db("Chatbots");
    client.close();
});
module.exports('client', Client);