let nomes = ["joão silva", "maria fernandes", "carlos pereira"];

function formatarNomes(array){
      const resultado = array.map(item => {
            return item.toUpperCase()
      })

      nomes = resultado
}

formatarNomes(nomes)
console.log(nomes)