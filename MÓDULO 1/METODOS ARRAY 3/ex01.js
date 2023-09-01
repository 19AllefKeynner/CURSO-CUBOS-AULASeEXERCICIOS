const arrayObjetos = [
      {id:12, nome: 'Allef', idade: 18},
      {id: 2, nome: 'Roger', idade: 19},

]

arrayObjetos.sort((a, b) => {
      if(a.id < b.id){
            return -1
      }else if(a.id > b.id){
            return 1
      }else{
            return 0
      }
})

console.log(arrayObjetos)

arrayObjetos.sort((a, b) => {
      if(a.id < b.id){
            return 1
      }else if(a.id > b.id){
            return -1
      }else{
            return 0
      }
})


console.log(arrayObjetos)