const nomeDeEstudantes = ['allef', 'Clara', 'sula', 'roger', 'mirely']

console.log(`Antes: ${nomeDeEstudantes}!`)

nomeDeEstudantes.unshift('papai')
//Adicionando um item ao inicio da lista

console.log(`Depois: ${nomeDeEstudantes}!`)

nomeDeEstudantes.shift()
//Removendo esse item

console.log(`Um pouco mais de alteração: ${nomeDeEstudantes}!`)