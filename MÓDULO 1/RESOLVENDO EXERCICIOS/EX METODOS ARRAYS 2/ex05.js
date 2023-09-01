const listaUser = [
      {
            nome: 'Allef',
            idade: 18,
            habilitado: true
      },
      {
            nome: 'Mirely',
            idade: 13,
            habilitado: false
      },
      {
            nome: 'Marcio',
            idade: 42,
            habilitado: true
      },
      {
            nome: 'Roger',
            idade: 17,
            habilitado: false
      },
      {
            nome: 'Leticia',
            idade: 39,
            habilitado: true
      },
]


const filtrar = (lista) => {
      const resultado = lista.filter((element) => {
            return element.idade > 17 && element.idade < 65
      })

      const testeCNH = resultado.every((element) => {
            return element.habilitado === true
      })

      let nomeSelecionados = ''
      for (let item of resultado){
            nomeSelecionados += `${item.nome}, `
      }

      console.log(`Os selecionados foram: ${nomeSelecionados.slice(0, nomeSelecionados.length-2)}`)
      if(testeCNH === false){
            console.log('Todos precisam estar habilitados!')
      }else{
            console.log('Todos estão habilitados e estão àptos ao próximom teste!')
      }

}

filtrar(listaUser)