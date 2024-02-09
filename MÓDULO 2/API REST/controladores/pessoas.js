const listaDePessoas = require('../dados/pessoas')

let novoId = 5

function consultarTodasPessoas(req,res){
      res.json(listaDePessoas)
}

function consultarPeloId(req,res){
      const id = req.params.id
      const pessoa = listaDePessoas.find(pessoa => {
            return pessoa.id === Number(id)
      })

      if(!pessoa){
            res.status(404)
            res.json({erro: "ID não encontrado!"})
      }else{
            res.json(pessoa) 
      }
}

function criarPessoa(req, res){
      const objetoRecebido = req.body
      console.log()
      if (!req.body.nome || !isNaN(parseInt(req.body.nome))){
            res.status(400)
            res.json({erro: "O parâmetro ( nome ) não foi encontrado ou não é valido, impossivel adicionar!"})
            return
      }

      if (!req.body.idade || isNaN(parseInt(req.body.idade))){
            res.status(400)
            res.json({erro: "O parâmetro ( idade ) não foi encontrado ou não é valido, impossivel adicionar!"})
            return
      }
      const novoObjeto = {
            id: novoId,
            ...objetoRecebido
      }

      listaDePessoas.push(novoObjeto)
      novoId ++

      res.send('Sucesso!')
}

function alterarUmDado(req,res){
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

}

function substituirUmaPessoa(req,res){
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

}

function deletar(req,res){
      const indexObjetoAtual = listaDePessoas.findIndex(pessoa => {
            return pessoa.id === Number(req.params.id)
      })

      if(indexObjetoAtual > -1){
            listaDePessoas.splice(indexObjetoAtual, 1)
     
            res.send('sucesso!')
      }else{
            res.send('id não encontrado, impossivel deletar!')
      }
}
module.exports = {
      consultarTodasPessoas, 
      consultarPeloId, 
      criarPessoa,
      alterarUmDado,
      substituirUmaPessoa,
      deletar
}