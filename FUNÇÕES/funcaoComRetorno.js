function verificarIdade(idade){
      if (idade >= 18){
            return true
      } else {
            return false 
      }
}

const idade = 18
const podeBeber = verificarIdade(idade)

console.log(podeBeber)