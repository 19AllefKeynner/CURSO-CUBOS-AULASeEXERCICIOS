function corpoMensagem(req, res, next){
      console.log(req.method, req.url)
      console.log('O corpo da mensagem é: '+ req.body)
      next()
}

function requerSenha(req, res, next){
      console.log(req.query)
      if(req.method == "GET"){
            next()
      }else{
            if(req.query.senha == '11234'){
                  next()
            }else{
                  res.status(401)
                  res.json({erro: 'Senha inválida!'})
            }
      }
}

module.exports = {
      corpoMensagem,
      requerSenha
}