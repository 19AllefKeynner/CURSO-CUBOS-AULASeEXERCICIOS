const arquivo = 'whatsapp.pdf'

validaArquivos(arquivo)

function validaArquivos(arquivo){
      let aceitou = false
      let index = arquivo.indexOf('.') + 1
      const arquivosAceitos = ['jpg', 'png', 'jpeg', 'gif']
      const pegandoExtensao = arquivo.slice(index)

      for(let extensao of arquivosAceitos){
            if (extensao === pegandoExtensao){
                  aceitou = true
            }
      }

      return aceitou
}