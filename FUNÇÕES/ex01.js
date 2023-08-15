const pessoa = {
      nome: 'Allef',
      idade: 20,
      ocupacao: 'estudante',
      altura: 1.70
}

function apresentou (nome, idade, altura, ocupacao){
      let idadeNome = idade
      if (idade <= 55 ){
            idadeNome = 'jovem'

      } else{
            idadeNome = 'senhor(a)'
      }

      return console.log(`Olá! me chamo ${nome}, Sou um(a) ${idadeNome} de ${idade} anos, ${altura}m de altura e sou ${ocupacao}!`)
}

apresentou(pessoa.nome, pessoa.idade, pessoa.altura, pessoa.ocupacao)