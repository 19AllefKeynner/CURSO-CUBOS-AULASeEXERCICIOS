const array = [1,4,67,8,9,0,12,43]

function pegarMaior(array){
      const resultado = array.reduce((acumulador,itemAtual) => {
            if (itemAtual > acumulador){
                  return itemAtual
            }else{
                  return acumulador
            }
      })

      console.log(resultado)
}

pegarMaior(array)