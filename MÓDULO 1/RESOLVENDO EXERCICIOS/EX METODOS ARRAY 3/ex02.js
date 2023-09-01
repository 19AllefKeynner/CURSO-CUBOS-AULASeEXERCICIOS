const array = ['Banana', 'Uva', 'Maçã', 'pêraa', 'Abacaxi']

function ordemAlfabetica(array){
      const resultado = array.sort((a,b) => {
            const element1 = a
            const element2 = b
            return element1.localeCompare(element2)
      })

      console.log(resultado)
}

function ordemAlfabeticaDecrescente(array){
      const resultado = array.sort((a,b) => {
            const element1 = a
            const element2 = b
            if (element1.localeCompare(element2) < 0){
                  return 1
            }else if (element1.localeCompare(element2) > 0){
                  return -1
            }else{
                  return 0
            }
      })

      console.log(resultado)
}

function ordenarPorCaracteres(array){
      const resultado = array.sort((a,b) => {
            return a.length - b.length
      })

      console.log(resultado)
}

ordemAlfabetica(array)
ordemAlfabeticaDecrescente(array)
ordenarPorCaracteres(array)