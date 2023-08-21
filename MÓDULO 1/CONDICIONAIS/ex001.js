let numeroAleatorio = Math.floor(Math.random() * 11)

let telaCima = document.getElementById('mostrador1')
const enter = document.getElementById('btn')

enter.addEventListener("click", function(){
      const numero = Number(document.getElementById('numero').value)
     
      if (numero == numeroAleatorio){
            telaCima.textContent = "Parabéns voçê acertou!!!  Acabei de pensar em outro, tente adivinhar de novo!"
            numeroAleatorio = Math.floor(Math.random() * 11)
            
      }
      
      else{
            telaCima.textContent = "desculpe... tente de novo!"
      }
      
})
            

