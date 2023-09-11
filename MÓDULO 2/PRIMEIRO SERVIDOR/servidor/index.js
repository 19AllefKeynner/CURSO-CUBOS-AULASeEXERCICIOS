const express = require("express")

const app = express()

app.get("/",(req, res) => {
      console.log("recebi um chamado!")

      res.send("ainda não há nada aqui!")
})

app.get("/teste",(req, res) => {
      console.log("recebi um chamado!")

      res.send("mais um teste!")
})


app.listen(8000)

