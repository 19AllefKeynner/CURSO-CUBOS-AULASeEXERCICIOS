const nomeCompleto = 'allef keynner souza silva'

function formataNome(nome){
      const nomeQuebrado = nome.split(' ')
      let fraseFormatada = ''
      for (let itens of nomeQuebrado){
            fraseFormatada += `${itens[0].toUpperCase()}${itens.substring(1)} `
            
             

      }

      fraseFormatada = fraseFormatada.slice(0, fraseFormatada.length -1)
      console.log(fraseFormatada)
}

function pegarNome(nome){
      const nomeQuebrado = nome.split(' ')
      return nomeQuebrado[0]
}


formataNome(nomeCompleto)
