const array = [
      {
            nome: 'gol',
            marca: 'vw',
            ano: 2022,
            cor: 'branco'
      },
      {
            nome: 'onix',
            marca: 'gm',
            ano: 2022,
            cor: 'branco'
      },
      {
            nome: 'palio',
            marca: 'fiat',
            ano: 2008,
            cor: 'preto'
      },
]

const cars = (marca, array) => {
      const resultado = array.find((element)=>{
            return element.marca === marca
      })

      console.log(resultado)
}

cars('gm', array)