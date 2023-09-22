let numeros = [1, 2, 3, 4, 2, 5, 2];

function removerElemento(numeros, numero){
      for(let item of numeros){
            if (item === numero){
                  let indice = numeros.indexOf(item)
                  numeros.splice(indice,1)
            }  
      }
}

removerElemento(numeros, 2)
console.log(numeros)