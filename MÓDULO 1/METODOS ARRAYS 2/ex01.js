const onibus = [
      {
            nome: 'Sula',
            idade: 18
      },
      {
            nome: 'Allef',
            idade: 19
      },
      {
            nome: 'Miih',
            idade: 18
      },
      {
            nome: 'Roger',
            idade: 19
      }
]

const verificarIdade = (valor) => {
      const resultado = valor.every((element) => {
            return (element.idade > 18)
      })

      if(resultado){
            console.log('Entrada liberada!')
      }else{
            console.log('Entrada barrada, há um menor de idade!')
      }
}

verificarIdade(onibus)