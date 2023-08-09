const palavra = "Allef keynner"

let letraE = 0;
let encontrado = 0;
let plural = letraE === 1 ? "letra" : "letras"


for(letra of palavra){
      if(letra === "e"){
            letraE++
            encontrado = 1
      }
}

if (encontrado >= 1){
      console.log(`Encontrei ${letraE} ${plural} "E" na frase!`)
}else{
      console.log(`Não há letra "E" na frase!`)
}