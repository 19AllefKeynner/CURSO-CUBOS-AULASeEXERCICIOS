const array = [
      {nome: 'Allef', sobrenome: 'Keynner'},
      {nome: 'Leticia', sobrenome: 'Rodriges'},
      {nome: 'Roger', sobrenome: 'Souza'},
      {nome: 'Mirely', sobrenome: 'Batista'},
]


function nomeCompleto(array){
      const resultado = array.map((element) => {
            return element.nome + ' ' + element.sobrenome
      })

      console.log(resultado)
}


nomeCompleto(array)