const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const numerosEmOrdemCrescente = (lista) => {
      const resultado = lista.sort((elementA, elementB) => {
            if (elementA < elementB){
                  return -1
            }else if(elementA > elementB){
                  return 1
            }else{
                  return 0
            }
      })

      console.log(resultado)
}

const numerosEmOrdemDecrescente = (lista) => {
      const resultado = lista.sort((elementA, elementB) => {
            if (elementA < elementB){
                  return 1
            }else if(elementA > elementB){
                  return -1
            }else{
                  return 0
            }
      })

      console.log(resultado)
}

const numerosEmOrdemUnicode = (lista) => {
      const resultado = numeros.sort()

      console.log(resultado)
}


numerosEmOrdemCrescente(numeros)
numerosEmOrdemDecrescente(numeros)
numerosEmOrdemUnicode(numeros)
