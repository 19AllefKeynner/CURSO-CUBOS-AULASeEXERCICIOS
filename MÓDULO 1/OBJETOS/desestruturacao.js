const guardaDados = {
      nome: 'allef',
      idade: '20',
      cep: 45965000
}

const {nome, ...tudoRestante} = guardaDados

console.log(nome)
console.log(tudoRestante.cep)