const express = require('express')

const app = express()
app.use(express.json())

const listaDePessoas= [
      {
            id: 1,
            nome: 'allef',
            idade: 18
      },
      {
            id: 2,
            nome: 'roger',
            idade: 18
      },
      {
            id: 3,
            nome: 'sula',
            idade: 18
      },
      {
            id: 4,
            nome: 'clara',
            idade: 18
      },
]

let novoId = 5

app.get('/pessoas', (req,res) =>{
      res.json(listaDePessoas)
})
app.get('/pessoas/:id', (req,res) =>{
      const id = req.params.id
      const pessoa = listaDePessoas.find(pessoa => {
            return pessoa.id === Number(id)
      })
      res.json(pessoa)  
})

app.post('/pessoas', (req,res) => {
      const objetoRecebido = req.body
      const novoObjeto = {
            id: novoId,
            ...objetoRecebido
      }

      listaDePessoas.push(novoObjeto)
      novoId ++

      res.send('Sucesso!')
})

app.patch('/pessoas/:id', (req,res) => {
      const objetoAtual = listaDePessoas.find(pessoa => {
            return pessoa.id === Number(req.params.id)
      })

      if(req.body.nome !== undefined){
            objetoAtual.nome = req.body.nome
      }
      if(req.body.idade  !== undefined){
            objetoAtual.idade = req.body.idade
      }
     
      res.json(objetoAtual)

})

app.put('/pessoas/:id', (req,res) => {
      let novoObjeto = ''

      let indexObjetoAtual = listaDePessoas.findIndex(pessoa => {
            return pessoa.id === Number(req.params.id)
      })

      if(req.body.nome !== undefined && req.body.idade !== undefined && indexObjetoAtual > -1){
            novoObjeto = {
                  ...req.body
            }

            listaDePessoas.splice(indexObjetoAtual, 1, novoObjeto)
     
            res.json(novoObjeto)

      }else if(req.body.nome !== undefined && req.body.idade !== undefined&& indexObjetoAtual < 0 ){
            listaDePessoas.push(req.body)
     
            res.send('sucesso!')
      }else{
            res.send('Falied')
      }

      
})

app.delete('/pessoas/:id', (req,res) => {
      const indexObjetoAtual = listaDePessoas.findIndex(pessoa => {
            return pessoa.id === Number(req.params.id)
      })

      if(indexObjetoAtual > -1){
            listaDePessoas.splice(indexObjetoAtual, 1)
     
            res.send('sucesso!')
      }else{
            res.send('id não encontrado, impossivel deletar!')
      }
})

app.listen(9000)