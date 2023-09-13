const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
      input.addEventListener("change", function(){
            const digitado = input.value
            const resultado = input.dataset.resposta

            if(Number(resultado) === Number(digitado.trim())){
                  checked(input, true)
            }else{
                  checked(input, false)
            }
      }) 
})

function checked(element, condicao){
      if (condicao === true){
            element.style.border = '2px solid green'
            element.disabled = true
      }else{
            element.style.border = '2px solid red'
      }
}