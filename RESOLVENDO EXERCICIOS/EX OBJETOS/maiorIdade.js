const users = [
      {
            nome: 'Allef',
            idade: 25,
            maiorIdade: maiorIdade(this.idade)
      },

      {
            nome: 'Roger',
            idade: 20,
            maiorIdade: maiorIdade(this.idade)
      },

      {
            nome: 'Mirelly',
            idade: 13,
            maiorIdade: maiorIdade(this.idade) 
      }
]

for (let user of users){
      if (user.idade > 17){
            user.fala = 'É maior de idade! '
      } else{
            user.fala = 'É menor de idade! '
      }
}

function maiorIdade(idade){
      if(idade >= 18){
            return true
      }else{
            return false
      }
}



console.log(users)