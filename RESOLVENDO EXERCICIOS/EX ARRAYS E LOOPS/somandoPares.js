const listaNum = [2,5,7,8,10,20,30]
let listaParesSoma = 0
let listaPares = ''

for (let num of listaNum){
      if(num % 2 === 0){
            listaParesSoma += num
            listaPares += `${num} `
      }
}

console.log(`Os números pares encontrados foram: ${listaPares}`)
console.log(`A soma de todos os números pares é: ${listaParesSoma}!`)