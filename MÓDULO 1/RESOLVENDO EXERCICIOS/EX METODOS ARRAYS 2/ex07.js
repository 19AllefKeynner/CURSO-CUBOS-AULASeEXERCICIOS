const ceps = [
      {
            cep: 45965000, rua: 'rua da matriz'
      },
      {
            cep: 23965000, rua: 'rua jacaranda'
      },
      {
            cep: 15965010, rua: 'rua da vila'
      },
      {
            cep: 45990000, rua: 'rua do campo'
      },
]


function validarCep(cepDesejado){
      let resultado = ceps.find((element) => {
            return element.cep === cepDesejado
      })

      resultado = resultado.rua

      console.log('endereço: '+resultado.toUpperCase())
}

validarCep(45965000)