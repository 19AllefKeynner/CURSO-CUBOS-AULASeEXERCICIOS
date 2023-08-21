const frase = 'Allef Roger'

console.log(reverseString(frase))

function reverseString(string){
      let fraseReverse = ''
      let cont = string.length
      while(cont > 0){
            const index = cont -1 
            fraseReverse += string[index]
            cont -= 1
      }
      return fraseReverse
}

console.log(reverseString1(frase))

function reverseString1(string){
      const fraseQuebrada = frase.split('')
      fraseQuebrada.reverse()
      return fraseQuebrada.join('')
}
