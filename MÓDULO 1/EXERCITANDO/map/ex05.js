const strings = ["   Exemplo ", "De", " STRINGs ", " Normalizadas  "];

function normalizarStrings(array){
      const resultado = array.map(item => {
            return item.trim().toLowerCase()
      })

      return resultado
}

const formatadas = normalizarStrings(strings)
console.log(formatadas)