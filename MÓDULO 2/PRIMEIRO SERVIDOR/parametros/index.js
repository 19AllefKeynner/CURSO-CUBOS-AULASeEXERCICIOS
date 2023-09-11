const express = require("express")

const app = express()

app.get("/musicas/:nome/estilo/:nomeestilo",(req, res) => {
      console.log(req.params)

      if(req.params.nome > 0 && req.params.nome < 19){
            if (req.params.nomeestilo === 'funk' || req.params.nomeestilo === 'rap' || req.params.nomeestilo === 'trap' || req.params.nomeestilo === 'piseiro'){
                  res.send('Playlist ' + req.params.nome + " tocando " + req.params.nomeestilo)
            }
      }else{
            res.status(404)
            res.send('Essa playlist foi excluida ou não está disponivel!')
      }

      
      
})

app.listen(8000)

