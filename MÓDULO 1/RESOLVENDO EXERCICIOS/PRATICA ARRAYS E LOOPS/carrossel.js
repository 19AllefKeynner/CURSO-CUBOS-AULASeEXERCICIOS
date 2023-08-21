const clicks = '>>>>>>>><<'

let arrayDados = clicks.split('')
let cont = 0
let direita = 0

while(cont <= arrayDados.length){
      if(arrayDados[cont] === '>'){
            direita += 1
            if (direita > 6){
                  direita = 0
            }
      }else if(arrayDados[cont] === '<'){
            direita -= 1
            if (direita < 0){
                  direita = 6
            }
      }
      
      cont ++
}

console.log(direita)
