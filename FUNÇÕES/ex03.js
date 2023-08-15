const pessoa = {
      nome: 'Allef',
      idade: 20,
      ocupacao: 'estudante',
      altura: 1.70
}

function etaria(idade){
      if(idade <= 21){
            return "Jovem"
      }else if(idade >= 22 && idade <= 65){
            return "Adulto"
      }else if(idade >= 66 ){
            return "Idoso"
      }
}

function apresentou (pessoa){
      return console.log(`Olá! me chamo ${pessoa.nome}, Sou um(a) ${etaria(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.ocupacao}!`)
}

apresentou(pessoa)