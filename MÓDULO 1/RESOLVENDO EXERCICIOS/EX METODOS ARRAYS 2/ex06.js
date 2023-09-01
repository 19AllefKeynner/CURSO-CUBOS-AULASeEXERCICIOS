const cidades = [
      'salvador',
      'teixeira de freitas',
      'medeiros neto',
      'são paulo',
      'recife',
      'brasilia'
]

function returCidades(lista){
      const resultado = lista.filter((element) => {
            return element.length <= 8
      } )

      console.log(`Cidades com até 8 letras: ` + resultado.join(', '))
}

returCidades(cidades)