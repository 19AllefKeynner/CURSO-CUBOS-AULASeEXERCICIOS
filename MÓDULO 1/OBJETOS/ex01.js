const pessoa = {
      nome: 'Allef',
      idade: 20,
      altura: 1.70,
      temCNH: false,
      apelidos: ['Inho', 'kenin']
}

let possuiNaoPossui = pessoa.temCNH === true ? 'possui CNH' : "não possui CNH"

console.log(`${pessoa.nome} é um rapaz de ${pessoa['idade']} anos de idade e altura de ${pessoa.altura.toFixed(2)}m, ${possuiNaoPossui} e seus apelidos são: `)
for(let item of pessoa.apelidos){
      console.log(`--${item}`)
}