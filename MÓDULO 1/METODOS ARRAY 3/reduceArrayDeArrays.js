const array = [[0,1],[2,3],[4,5]]

console.log(array.reduce((acumulador, valorAtual)=>{
      acumulador = [...acumulador,...valorAtual]
      return acumulador
}))
