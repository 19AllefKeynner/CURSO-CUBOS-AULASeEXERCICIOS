const express = require('express')
const roteador = require('./roteador')

const app = express()
app.use(express.json())

app.use((req, res, next) => {
      console.log(req.method, req.url)
      console.log('O corpo da mensagem é: '+ req.body)
      next()
})

app.use(roteador)

app.listen(9000)