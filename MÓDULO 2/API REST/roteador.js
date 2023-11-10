const express = require('express')
const controladores = require('./controladores/pessoas')

const roteador = express()

roteador.get('/pessoas', controladores.consultarTodasPessoas)
roteador.get('/pessoas/:id', controladores.consultarPeloId)
roteador.post('/pessoas', controladores.criarPessoa)
roteador.patch('/pessoas/:id', controladores.alterarUmDado)
roteador.put('/pessoas/:id', controladores.substituirUmaPessoa)
roteador.delete('/pessoas/:id', controladores.deletar)


module.exports = roteador