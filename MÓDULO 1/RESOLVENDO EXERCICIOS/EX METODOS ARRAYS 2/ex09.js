const numbers = [0, -1, 90, -34, -78, 98, 12]

function pegarNumerosPositivos(lista){
      const resultado = lista.filter((element) => {
            return element > 0
      })

      console.log(resultado)
}

pegarNumerosPositivos(numbers)