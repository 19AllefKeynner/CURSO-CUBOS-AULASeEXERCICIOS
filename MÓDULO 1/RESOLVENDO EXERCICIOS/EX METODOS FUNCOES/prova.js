const prova = {
      aluno: 'Allef Keynner Souza Silva',
      materia: 'Matematica',
      valor: 10,
      questoes: [
            {
                  resposta: 'a',
                  correta: 'b'
            },
            {
                  resposta: 'c',
                  correta: 'c'
            },
            {
                  resposta: 'e',
                  correta: 'b'
            },
            {
                  resposta: 'b',
                  correta: 'b'
            },
            {
                  resposta: 'c',
                  correta: 'c'
            },
      ]
}

corrigirProva(prova)

function corrigirProva(prova){
      const valorQuestao = prova.valor / prova.questoes.length
      
      let contt = 0
      let contaAcertos = 0
      while (contt < prova.questoes.length){
            const questao = prova.questoes[contt]
            if (questao.resposta === questao.correta){
                  contaAcertos ++
            }
            contt ++
      }

      console.log(`Você acertou ${contaAcertos} questões e sua nota foi ${contaAcertos * valorQuestao}`)
}