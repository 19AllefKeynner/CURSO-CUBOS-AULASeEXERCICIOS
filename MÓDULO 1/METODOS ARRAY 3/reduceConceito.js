const array = [0,1,2,3,4]

console.log(array.reduce((acumulador, valorAtual, indice, array)=>{
      return acumulador + valorAtual
}))
