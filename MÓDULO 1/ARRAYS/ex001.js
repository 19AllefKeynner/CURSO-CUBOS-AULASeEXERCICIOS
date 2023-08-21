let telaCima = document.getElementById('mostrador1')
let telaBaixo = document.getElementById('mostrador2')
const enter = document.getElementById('btn')
let guardaNumeros = [[], []]
let contPar = 0
let contImpar = 0
let cont = 0




enter.addEventListener("click", function(){
      const numero = Number(document.getElementById('numero').value)
      cont++

      if (numero % 2 === 0 ){
            guardaNumeros[0].push(numero)
            contPar++
      } else{
            guardaNumeros[1].push(numero)
            contImpar++
      }
      
      if (cont >= 7){
            telaBaixo.textContent = `Esses são os números ímpares ${guardaNumeros[1]}`
            telaCima.textContent = `Esses são os números pares ${guardaNumeros[0]}`
            
      }

      
})


            
