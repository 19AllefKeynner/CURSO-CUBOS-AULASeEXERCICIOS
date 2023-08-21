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

const maiores = []
const menores = []
let indiceJovem = 0
let indice = 0

for (const pessoa of pessoas){
      if(pessoa.idade > 17){
            maiores[indice] = pessoa
            indice ++
      } else{
            menores[indiceJovem] = pessoa 
            indiceJovem ++
      }
      
}

console.log(maiores , menores)
