const listaNum = [2,5,7,8,10,20,30]
let maior = ''
let conte = 0
while(conte < listaNum.length){
      if (conte === 0){
            maior = listaNum[conte]
      }else{
            if(listaNum[conte] > maior)
            maior = listaNum[conte]
      }
      conte ++
}

console.log(`O maior número da lista é: ${maior}`)