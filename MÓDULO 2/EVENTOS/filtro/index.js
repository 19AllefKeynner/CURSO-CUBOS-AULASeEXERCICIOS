const frutas = document.querySelectorAll('li')
const inputs = document.querySelectorAll('input')

inputs.forEach(input =>{
      input.addEventListener('keydown', function(event){
            if(verificar(event)){
                  filtrar(frutas, event.target.value)
                  event.target.value = ''
      
            }else{
                  frutas.forEach(fruta => {
                        fruta.classList.remove('escondido')
                  });
            } 
      })
})

function verificar(element){
      if(element.target.value != '' && element.key === 'Enter'){
            return true
      }
}

function filtrar(frutas, element){
      frutas.forEach(fruta => {
            if (fruta.textContent.indexOf(element) === -1 || fruta.textContent.indexOf(element) > 0){
                  fruta.classList.add('escondido')
            }else{
                  fruta.classList.remove('escondido')
            }
      });
}