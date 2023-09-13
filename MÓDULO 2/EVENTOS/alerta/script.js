const div = document.getElementById('div')
const btn = document.querySelector('button')


function clicou(){
      btn.style.marginTop = '0px'
      div.classList.remove('escondida')
}

function xis(){
      btn.style.marginTop = '400px'
      div.classList.add('escondida')
}