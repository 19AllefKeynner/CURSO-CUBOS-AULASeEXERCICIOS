const disparos = [0,90,80,85,90,30]

verificarProva(disparos)

function verificarProva(dados){
      let cont70 = 0
      let lista = []
      for (let disparo of dados){
            if (disparo > 70){
                  cont70 ++
                  lista.push(disparo)
            }
      }
      
      if (cont70 >= 3){
            console.log(`Aprovado, você teve ${cont70} tiros acima de 70 pontos!`)
            let contt = 0
            let indice = dados.indexOf(lista[0])
            
            while (contt < lista.length){
                  console.log(`No seu ${dados.indexOf(lista[contt], indice)+1} disparo você fez ${lista[contt]} pontos!`)
                  contt ++
                  indice ++
            }

      }else{
            console.log('Reprovado!')
      }
}