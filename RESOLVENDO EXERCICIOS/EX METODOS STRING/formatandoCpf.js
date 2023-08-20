const cpf = '05145678911'

const Digitos = cpf.slice(0,3)


if (cpf.length === 11){
      console.log(`Salvando seu CPF...
CPF ${Digitos.padEnd(11, "*")} salvo com sucesso!`)
}else{
      console.log('CPF inválido!')
}