const cores = ["vermelho", "verde", "azul", "verde", "amarelo"];

function substituirElemento(array, substituido, atual){
      const indice = array.indexOf(substituido)
      array.splice(indice, 1, atual)
}

substituirElemento(cores,'vermelho','cuzão')
console.log(cores)