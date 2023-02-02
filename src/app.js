const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ aplicacao: 'CRUD PESSOAS' })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta de conexão ${port}.`)
})