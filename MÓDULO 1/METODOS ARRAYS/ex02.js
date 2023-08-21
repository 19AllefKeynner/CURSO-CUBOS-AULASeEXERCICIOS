const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]



// a função pega uma lista e exclui 10% do inicio e 10% do final, retornado a lista modificada

function guardaMeio(array){
      const index = (array.length / 10).toFixed(0)
      const meio = array.slice(index, array.length - index)
      console.log(meio)
}

// a função pega uma lista e exclui 10% do inicio e 10% do final, retornado a lista modificada, porém arredonda para cima

function guardaMeio2(array){
      let index = 0
      const tamanhoDeArray = array.length / 10
      const tamanhoDeArrayFormatado = (array.length / 10).toFixed(0)
      if (tamanhoDeArray != tamanhoDeArrayFormatado){
            index = Number((array.length / 10).toFixed(0)) + 1
            console.log(index)
      }else{
            index = (array.length / 10).toFixed(0)
      }

      const meio = array.slice(index, array.length - index)
      console.log(meio)
}

guardaMeio2(array)