const array = ['palavra', 'palavra1', 'palavra20', 'palavra3', 'palavra4']

function testarPalavras(array){
      const resultado = array.some((element) => {
            return element.length > 8
      })
      
      if (resultado === false){
            console.log('Nenhum erro')
      }else(
            console.log('Erro encontrado')
      )
      
      
}

testarPalavras(array)