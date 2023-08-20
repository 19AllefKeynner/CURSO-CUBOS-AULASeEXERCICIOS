const preco = [20, 17, 4, 2, 11]

let perdaMinima = 0
for (let item of preco){
      for (let item1 of preco.slice(1)){
            if (perdaMinima === 0){
                  perdaMinima = item - item1
            }else{
                  if (item - item1 > 0 && item - item1 < perdaMinima){
                        perdaMinima = item - item1    
                  }
            }
      }    
}
console.log((perdaMinima))
