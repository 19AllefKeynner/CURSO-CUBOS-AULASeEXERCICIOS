const cidades = [
      'Salvador',
      'São Paulo',
      'Brasilia',
      'Recife',
      'Rio de Janeiro'
]

function maiorString(array){
      const resultado = array.reduce((acumulador, valorAtual) => {
            if (acumulador.length > valorAtual.length){
                  return acumulador
            }else if(acumulador.length < valorAtual.length){
                  return valorAtual
            }
      })

      console.log(resultado)
}


maiorString(cidades)