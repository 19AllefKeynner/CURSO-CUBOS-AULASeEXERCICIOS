let id = '1'
let nome = 'Allef Keynner Souza Silva'
let email = 'allef4670@gmail.com'

function verificaEmail(email){
      if (email.indexOf('@') > -1){
            const indice = email.indexOf('@') 
            if(email.indexOf('.', indice) != -1 && email.indexOf('@', indice + 1) === -1 ){
                  return true
            }else{
                  return  false
            }
      }else{
            return false
      }
}

function formataNome(nome){
      const nomeQuebrado = nome.split(' ')
      let fraseFormatada = ''
      for (let itens of nomeQuebrado){
            fraseFormatada += `${itens[0].toUpperCase()}${itens.substring(1)} `
            
             

      }

      fraseFormatada = fraseFormatada.slice(0, fraseFormatada.length -1)
      return (fraseFormatada)
}

function pegarNome(nome){
      const nomeQuebrado = nome.split(' ')
      return nomeQuebrado[0]
}

function validaDados(id, nome, email){
      let idValidou = ''
      let nomeValidou = ''

      if (id.length < 6){
            idValidou = id.padStart(6, '0')
      }

      nomeValidou = formataNome(nome)

      if (verificaEmail(email)){
            console.log('Dados confere!')
            return [{email: email}, {id: idValidou}, {nome: nomeValidou}]
            
      }else{
            console.log('Algo deu errado!')
      }


      
      

}



console.log(validaDados(id, nome, email))