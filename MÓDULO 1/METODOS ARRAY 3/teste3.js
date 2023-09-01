const arrayPalavras = ['Allef', 'Roger', 'Birely']

arrayPalavras.sort((a,b) => {
    return a[0].localeCompare(b[0])
})


console.log(`Ordem crescente: ${arrayPalavras}`)

arrayPalavras.sort((a,b) => {
      if(a[0].localeCompare(b[0]) > -1 ){
            return -1
      }else if( a[0].localeCompare(b[0]) === -1 ){
            return 1
      }else{
            return 0
      }
})

console.log(`Ordem decrescente: ${arrayPalavras}`)