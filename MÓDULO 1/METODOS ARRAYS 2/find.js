const objeto = [
      {
            nome: 'alef',
            idade: 18,
            
      },      
      {
            nome: 'allef',
            idade: 17,
            
      }, 
      {
            nome: 'ana',
            idade: 18,
            
      }, 
      {
            nome: 'alf',
            idade: 18,
            
      }, 
]

const pegaFind = objeto.find((objet) => {
      return objet.idade >= 18
})

console.log(pegaFind)
