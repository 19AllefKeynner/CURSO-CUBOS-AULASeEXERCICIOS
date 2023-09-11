const objeto = {
      nome: 'Allef',
      idade: 19,
      sexo: 'masculino',
      CNH: false
}

const {nome, idade, ...uteis} = objeto

console.log(nome)
console.log(idade)
console.log(uteis)