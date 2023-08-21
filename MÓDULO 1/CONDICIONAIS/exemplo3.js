let temIngresso = true
let censura = 16
let idade = 12
let estaComPais = false

if (temIngresso === true){
      if(idade >= censura || estaComPais === true){
            console.log("Pode entrar!")
      }
      else{
            console.log("Barrada!") 
      }
}
else{
      console.log("Barrada!")
}