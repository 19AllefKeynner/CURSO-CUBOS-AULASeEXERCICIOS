const array = [
      {id: 5, nome: 'jefin', idade: 35},
      {id: 3, nome: 'roger', idade: 15},
      {id: 4, nome: 'mirely', idade: 12},
      {id: 2, nome: 'clara', idade: 25},
      
]



console.log()


function pegarIdade(array){
      const contador = array.reduce((contador, indexAtual,index, array) => {
            if (indexAtual.idade > contador.idade){
                  contador = indexAtual
            }

            return contador  

      })

      console.log(contador)
    
}

pegarIdade(array)