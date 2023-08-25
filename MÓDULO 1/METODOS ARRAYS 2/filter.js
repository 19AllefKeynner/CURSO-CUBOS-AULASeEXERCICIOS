const professores = [
      {nome: 'Guido', stack: 'backend'},
      {nome: 'Vidal', stack: 'backend'},
      {nome: 'Dani', stack: 'frontend'},
      {nome: 'Diego', stack: 'frontend'},
      {nome: 'Léo', stack: 'backend'},
      {nome: 'Ruli', stack: 'frontend'},
]

const filtraProfessor = (lista, filtro ) => {
      const resultado = lista.filter((element) => {
            return element.stack === filtro
      })

      console.log(resultado)
}

filtraProfessor(professores, 'backend')
filtraProfessor(professores, 'frontend')