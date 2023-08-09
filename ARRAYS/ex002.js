const paises = ['Brasil', 'Portugal', 'Estados unidos', 'França', 'Japão']

console.log(`Lista de paises: ${paises}`)

paises.push('Africa')

console.log(`Adicionando um país ao final da lista: ${paises}`)

paises.shift()

console.log(`Removendo o primeiro país da lista: ${paises}`)

paises.unshift('Coreia do sul')

console.log(`Adicionando um país ao inicio da lista: ${paises}`)

paises.pop()

console.log(`Removendo o ultimo país da lista: ${paises}`)

console.log(`O ultimo país da lista é: ${paises[paises.length-1]}`)

console.log(`O segundo país da lista é: ${paises[1]}`)

console.log(`O país de índece número 2 é: ${paises[2]}`)