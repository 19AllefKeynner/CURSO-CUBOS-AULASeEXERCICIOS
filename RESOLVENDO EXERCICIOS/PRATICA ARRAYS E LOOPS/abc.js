const letra = 'a'
const palavras = ['abacaxi', 'ameixa', 'amora', 'morango']

let perdeu = 0
for (let palavra of palavras){
      if (palavra[0] != letra){
            perdeu += 1
      } 
}

console.log(perdeu)
