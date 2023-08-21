const numeros = [67,9,4,23,1]

let soma = 0
for(let i = 0; i < numeros.length; i++ ){
      soma += numeros[i]
      if(i === numeros.length-1){
            console.log(soma)
      }
}