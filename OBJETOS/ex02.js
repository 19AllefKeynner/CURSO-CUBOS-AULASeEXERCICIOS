const produto = {
      nomeProduto: 'Cerveja',
      precoUnidade: 450 ,  // centavos
      quantidadeComprada: 3
}

const produto1 = {
      nomeProduto: 'coca cola',
      precoUnidade: 850 ,  // centavos
      quantidadeComprada: 1
}

const produto2 = {
      nomeProduto: 'coxinha',
      precoUnidade: 450 ,  // centavos
      quantidadeComprada: 2
}

const cartaoCliente = {
      nome: 'Allef',
      idade: 20,
      produtosConsumidos: [produto,produto1,produto2]

      

}


console.log(`nome do cliente: ${cartaoCliente.nome}`)
console.log(`idade do cliente: ${cartaoCliente.idade}`)
console.log('')

let numeroProduto = 1
for (let produtoo of cartaoCliente.produtosConsumidos){
      console.log(`produto ${numeroProduto}: ${produtoo.nomeProduto}`)
      console.log(`preço (unidade) em centavos: ${produtoo.precoUnidade}`)
      console.log(`quantidade comprada: ${produtoo.quantidadeComprada}`)
      console.log('')
      numeroProduto++
}


console.log(`Ao todo foram ${numeroProduto-1} produtos consumidos!`)



console.log('')
console.log('')

console.log(`caro sr ${cartaoCliente.nome}, você consumiu ${numeroProduto-1} produtos!`)
numeroProduto = 1
for (let produtoo of cartaoCliente.produtosConsumidos){
      console.log(`${produtoo.quantidadeComprada} ${produtoo.nomeProduto} no valor de ${produtoo.precoUnidade} cada,
o que soma o total de ${produtoo.precoUnidade * produtoo.quantidadeComprada} ( valor em centavos ),
ou R$ ${Number(((produtoo.precoUnidade * produtoo.quantidadeComprada)/10)/10).toFixed(2)} reais `)
      console.log('')
      numeroProduto++
}