const express = require("express")

const app = express()

app.get("/soma",(req, res) => {
      console.log(req.query)
      const numero1 = Number(req.query.numero1)
      const numero2 = Number(req.query.numero2)
      const operador = req.query.operador

      if (operador === 'mais'){
            res.send(String(numero1+numero2))
      }else if(operador === 'menos'){
            res.send(String(numero1-numero2))
      }else if(operador === 'vezes'){
            res.send(String(numero1*numero2))
      }else if(operador === 'dividir'){
            res.send(String(numero1/numero2))
      }else{
            res.send("nenhum parametro informador!")
      }

      
})

app.listen(8000)
