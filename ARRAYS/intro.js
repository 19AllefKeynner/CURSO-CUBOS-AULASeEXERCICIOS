const nomeDeEstudantes = ['allef', 'Clara', 'sula', 'roger', 'mirely']


let cont = -1
while (cont < nomeDeEstudantes.length - 1){
      cont++
      console.log(nomeDeEstudantes[cont])
      if (cont === nomeDeEstudantes.length - 1){
            console.log('')
            console.log('>>> Fim da lista <<<')
      }
}