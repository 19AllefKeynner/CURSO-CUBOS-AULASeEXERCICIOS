let num1 = 5
let num2 = num1

num1 += 5

// Imprime exatamente o valor esperado, a variavel "num2" recebe uma copia da variavel "num1", não havendo conexão entre as variaveis
console.log(num1)
console.log(num2)



const obj1 = {num: 10}
const obj2 = obj1
obj1.num = 90

// Imprime algo "estranho", o obj2 recebe o valor do obj1 e cria uma conexão entre os dois objetos, sendo assim qualquer alterção feita em um terá efeito no outro
// Isso também serve para arrays ou "listas" pois para a linguagem, arrays são nada mais que objetos, e isso se aplica a qualquer objeto

// Nesse caso o obj2 recebe a referencia de onde está o obj1 e não o valor desse objeto, como esperado
console.log(obj1.num)
console.log(obj2.num)