const listaNumeros = [1,5,9,3,48,56,3,2,4,9,6,85]

listaNumeros.sort((a,b) => {
      if (a < b){
            return 1
      }else if (a > b){
            return -1
      }else {
            return 0
      }
})

console.log(listaNumeros)