const { ary } = require("lodash");

const valoresEmDolares = [50, 100, 200, 300];

function converterMoeda(array){
      const taxaDeConversao = 5.1

      const resultado = array.map(item => {
            return (item * taxaDeConversao).toFixed(0)
      })

      return resultado
}

const valoresConvertidos = converterMoeda(valoresEmDolares)
console.log(valoresConvertidos)