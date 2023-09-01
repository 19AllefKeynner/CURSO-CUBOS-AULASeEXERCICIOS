const carros = [
      {
            nome: 'Palio', marca: 'fiat', ano: 2022 ,cor: 'prata'
      },
      {
            nome: 'talio', marca: 'fiat', ano: 2022 ,cor: 'prata'
      },
      {
            nome: 'aPalio', marca: 'fiat', ano: 2022 ,cor: 'prata'
      },
      {
            nome: 'galio', marca: 'fiat', ano: 2022 ,cor: 'prata'
      },
      {
            nome: 'ualio', marca: 'fiat', ano: 2022 ,cor: 'prata'
      },
]

function ordenar(oQueOrdenar, peloQueOrdenar){
      const retorno = oQueOrdenar.sort((a,b) => {
            const element1 = a
            const element2 = b
            return element1[peloQueOrdenar].localeCompare(element2[peloQueOrdenar])

      })

      console.log(retorno)
}

ordenar(carros, 'nome')