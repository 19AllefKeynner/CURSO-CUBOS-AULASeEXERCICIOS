const numeros = [1, 2, 3, 4, 5];


function inserirNaMetade(array, inserir){
      const indexMetade = (array.length / 2).toFixed(0) -1
      array.splice(indexMetade,0,inserir)
}

inserirNaMetade(numeros, 10)
console.log(numeros)