const pessoa = {
      nome: 'Allef',
      idade: 20,
      sexo: 'masculino'
}

const pessoa1 = {
      nome: 'Leticia',
      idade: 30,
      sexo: 'feminino'
}

const pessoa2 = {
      nome: 'mirely',
      idade: 23,
      sexo: 'indefinido'
}


function apresentou (nome, idade, sexo){
      let sexoNome = sexo
      if (sexo === 'masculino' ){
            sexoNome = 'Homem'
      } else if (sexo === 'feminino'){
            sexoNome = 'mulher'
      } else{
            sexoNome = 'pessoa'
      }

      const umUma = sexo === 'masculino' ? 'um' : 'uma'

      let idadeNome = idade
      if (idade <= 25 ){
            idadeNome = ' jovem'

      } else if(idade > 60){
            idadeNome = ' senhor'
      } else {
            idadeNome = ''
      }

      return console.log(`Sou ${umUma} ${sexoNome}${idadeNome}, me chamo ${nome} e tenho ${idade} anos!`)
}

apresentou(pessoa.nome, pessoa.idade, pessoa.sexo)