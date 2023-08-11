const userDados = {
      nome: 'allef',
      idade: 20,
      sexo: 'masculino'
}

const endereco = {
      rua: 'rua da matriz',
      cep: 45965000
}


const tudoUser = {
      ...endereco,
      ...userDados
}

console.log(tudoUser)