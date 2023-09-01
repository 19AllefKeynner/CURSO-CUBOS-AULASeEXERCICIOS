const array = [0,10,11,17,15,5,-50]

const filtrarPares = (lista) => {
      const resultado = lista.filter((element) => {
            return element %2 === 0
      })

      console.log(resultado)
}

filtrarPares(array)