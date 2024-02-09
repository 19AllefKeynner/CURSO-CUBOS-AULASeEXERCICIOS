const express = require('express')
const roteador = require('./roteador')
const {corpoMensagem, requerSenha} = require('./intermediario')

const app = express()
app.use(express.json())
app.use((corpoMensagem))
app.use((requerSenha))
app.use(roteador)
app.listen(9000)