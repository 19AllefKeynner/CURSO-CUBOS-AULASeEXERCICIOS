const listaNumeros = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

let maiorNota = 0 
let menorNota = 0
let contNum = -2
let somaTotal = 0

for (let item of listaNumeros){
      contNum ++
      somaTotal += item
      if (maiorNota === 0 && menorNota === 0){
            maiorNota = item
            menorNota = item
      }else{
            if(item < menorNota){
                  menorNota = item
            }else if (item > maiorNota){
                  maiorNota = item
            }
      }
}

const soma = (maiorNota + menorNota)
const resultado = (somaTotal - soma) 

console.log( `Nota final: ${(resultado / contNum)}`)
