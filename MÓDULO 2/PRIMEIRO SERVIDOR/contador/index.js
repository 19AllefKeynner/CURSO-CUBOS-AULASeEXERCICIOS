const express = require("express")

const app = express()

let cont = 0

app.get("/contador", (req, res) => {
      cont ++
      res.send(String(cont))
      
})

app.get("/zerar", (req, res) => {
      res.send('zerei')
      cont = 0
})

app.get("/atribuir", (req, res) => {
      if(req.query.valor === undefined){
            res.status(404)
            res.send('Não foi possivel atribuir!!!')
      }else{
            console.log(req.query.valor)
            cont = Number(req.query.valor)
            res.send(String(cont))
      }
      
})


app.listen(8000)