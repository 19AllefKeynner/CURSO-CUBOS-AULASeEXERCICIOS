const pessoas = {

      nome: "Allef",
      peso: 70,
      altura: 1.70
}

pessoas.nome = "Pedro"
console.log(pessoas)
console.log(`Me chamo ${pessoas.nome} \n tenho ${pessoas.peso}kg e tenho ${pessoas.altura}m`)

pessoas['nome'] = 'Roger'
console.log(pessoas)
console.log(`Me chamo ${pessoas.nome} \n tenho ${pessoas.peso}kg e tenho ${pessoas.altura}m`)
