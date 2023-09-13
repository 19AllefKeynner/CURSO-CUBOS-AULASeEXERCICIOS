const btnPrincipal = document.querySelector('.btn-inscreva-se')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.modal button')
const btnConfirmar = document.querySelector('.confirma')

btnPrincipal.addEventListener('click', inscrever)

btns.forEach(btn => {
      btn.addEventListener('click', function(){
            modal.classList.add('escondido')
      })
})

btnConfirmar.addEventListener('click', function(){
      btnPrincipal.classList.remove('inscrito')
      btnPrincipal.textContent = 'Inscrever-se'

      btnPrincipal.removeEventListener('click', desinscrever)
      btnPrincipal.addEventListener('click', inscrever)
})

function inscrever(event){
      const btnInscrito = event.target
      btnInscrito.classList.add('inscrito')
      btnInscrito.textContent = 'Inscrito'

      btnInscrito.removeEventListener('click', inscrever)
      btnInscrito.addEventListener('click', desinscrever)
}

function desinscrever(){
      modal.classList.remove('escondido')
}