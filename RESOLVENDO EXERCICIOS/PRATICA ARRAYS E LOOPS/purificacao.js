const entradaDeDados = 'a!@@@))#%lle'

function pufificarDados(dados){
      let formatado = ''
      let corrupcao = ['!', '@', '#', '%', '&', '*', '(', ')']
      let arrayDados = entradaDeDados.split('')

      let cont = 0

      while(cont <= arrayDados.length){
            for(let item of corrupcao){
                  if (arrayDados[cont] === item){
                        const index = arrayDados.indexOf(arrayDados[cont])
                        arrayDados.splice(index, 1)
                        cont --
                  }
            }
            cont ++
      }
      
      formatado = arrayDados.join('')
      return formatado
}

console.log(pufificarDados(entradaDeDados))