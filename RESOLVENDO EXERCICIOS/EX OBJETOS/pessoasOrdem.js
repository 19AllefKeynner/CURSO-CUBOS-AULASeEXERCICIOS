const pessoas = [
      {
            nome: 'Allef',
            idade: 20
      },

      {
            nome: 'Roger',
            idade: 15
      },

      {
            nome: 'Sula',
            idade: 27
      },

      {
            nome: 'Mii',
            idade: 10
      },
]

let contador = 1

for (let objt of pessoas){
      objt.id = contador
      contador ++
}

console.log(pessoas)