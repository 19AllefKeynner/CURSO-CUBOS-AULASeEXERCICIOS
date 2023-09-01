const alunos = ['Allef', 'João', 'Leticia', "Mih", 'Boto', 'Tanos']
const tamanhoGrupo = 4

function dividirGrupos(lista, tamanhoGrupo){
      let grupos = []
      let cont = 0
      let indiceInicial = 0
      while(cont < lista.length){
            grupos.push(lista.slice(indiceInicial, indiceInicial+tamanhoGrupo))
            indiceInicial += 4
            cont += 4
      
      }

      let contador = 1
      for(let item of grupos){
            console.log(`Grupo ${contador}: ${item.join(', ')}`)
            contador ++
      }

      return grupos
}

dividirGrupos(alunos, tamanhoGrupo)