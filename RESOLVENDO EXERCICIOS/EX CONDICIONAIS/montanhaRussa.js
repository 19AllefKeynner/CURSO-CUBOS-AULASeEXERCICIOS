const idade = 18
const altura = 170
const temDoencaCardiaca = false
const estudante = false


if (idade > 12 && idade < 67 && altura > 150 && temDoencaCardiaca === false){
      console.log('Acesso liberado!')

      if (idade < 18 || estudante){
            console.log('Valor 10 reais!')
      } else{
            console.log('Valor 20 reais!')
      }
}else{
      console.log('Acesso negado!')
}