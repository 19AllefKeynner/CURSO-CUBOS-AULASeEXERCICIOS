const palavra = 'ABELHA'
const palpite = 'abe'

contaAcertos(palavra, palpite)

function contaAcertos(palavra, palpite){
      let acertos = 0
      for (let letra of palpite){
            let conte = 0   
            while (conte < palavra.length){
                  if (letra === palavra[conte].toLowerCase()){
                        acertos ++
                  }
                  conte ++
                  
            }
      }

      console.log(acertos)
}