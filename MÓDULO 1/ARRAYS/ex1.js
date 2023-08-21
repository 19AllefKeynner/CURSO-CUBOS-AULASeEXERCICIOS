const numeros = [1,2,3,4,5,6,7,8,9,10,11]
let conte = 0

while(conte < numeros.length){
      console.log(numeros[conte])
      conte++
      if(numeros[conte] === 7){
            console.log(`Encontrei o ${numeros[conte]}!`)
            break
      }
}