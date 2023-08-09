let numeroAleatorio = Math.floor(Math.random() * 11)

let telaCima = document.getElementById('mostrador1')
const enter = document.getElementById('btn')

enter.addEventListener("click", function(){
      const numero = Number(document.getElementById('numero').value)
     
      if (numero % 2 === 0){
            telaCima.textContent = "O número digitado foi par!"
            numeroAleatorio = Math.floor(Math.random() * 11)
            
      }
      
      else{
            telaCima.textContent = "O número digitado ímpar!"
      }
      
})
    