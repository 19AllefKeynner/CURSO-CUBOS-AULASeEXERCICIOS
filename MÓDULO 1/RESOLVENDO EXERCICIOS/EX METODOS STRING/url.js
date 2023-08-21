const url = 'Allef keynner souza silva'

let urlFormatada = url.split(" ")
let guardaVariavel = ''

for (let item of urlFormatada){
      guardaVariavel += `${item}-`

}

urlFormatada = guardaVariavel.slice(0, guardaVariavel.length - 1).toLowerCase()
console.log(urlFormatada)



// Ou simplesmente

const url2 = 'Allef keynner souza'

let urlFormatada2 = url2.split(" ")

urlFormatada2 = urlFormatada2.join('-').toLowerCase()
console.log(urlFormatada2)