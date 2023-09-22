const enviarBtn = document.querySelector('#enviarBtn')
const nome = document.querySelector('#nome')
const valor = document.querySelector('#valor')
const produtoTitulo = document.querySelector('#produtoTitulo')
const produtosDiferentes = document.querySelector('#produtosDiferentes')
const produto = document.querySelector('.produto')
const modal = document.querySelector('.modal')
const produtosModal = document.querySelector('.produtosModal')
const quantidadeLabel = document.querySelector('.quantidadeLabel')
const freteLabel = document.querySelector('.freteLabel')

let listaProdutos = []
let conte = 0

enviarBtn.addEventListener('click', function(){
      const nome = document.querySelector('#nome')
      const valor = document.querySelector('#valor')
      conte ++ 
      produtoTitulo.textContent = `Produto ${conte}`
      listaProdutos.push({nome: nome.value, valor: valor.value})
      nome.value = '', valor.value = ''

      if(conte -1 == produtosDiferentes.value){
            conte = 0
            produto.classList.add('escondido')
      }
      
})

if(conte -1 == produtosDiferentes.value){
      conte = 0
      produto.classList.add('escondido')
}

function arredondarInteiro(numero) {
      const ultimoDigito = numero % 10;
      if (ultimoDigito >= 5) {
        // Arredonda para cima
        return numero + (10 - ultimoDigito);
      } else {
        // Arredonda para baixo
        return numero - ultimoDigito;
      }
}   

function precoSugerido(custo){
      const porcento = (80 * custo) / 100
      const valor = custo + porcento
      return arredondarInteiro(valor)
}

function moverDivComAnimacao(div, marginLeftInicial, marginLeftFinal) {
      const minhaDiv = document.getElementById(div);
      minhaDiv.style.marginLeft = marginLeftInicial + 'px';
    
      setTimeout(() => {
        minhaDiv.style.marginLeft = marginLeftFinal + 'px';
      }, 0);
}

function moverDivComAnimacao2(div, marginLeftInicial, marginLeftFinal) {
      const minhaDiv = document.getElementById(div);
      minhaDiv.style.marginTop = marginLeftInicial + 'px';
    
      setTimeout(() => {
        minhaDiv.style.marginTop = marginLeftFinal + 'px';
      }, 0);
}

function falhou(){
      const loading = document.querySelector('.loading')
      const sucess = document.querySelector('#sucess')
      const icon = document.querySelector('.icon')

      icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
      icon.children[0].style.color = 'red'
      sucess.children[0].textContent = 'Falied'

      setTimeout(() => {
            moverDivComAnimacao('sucess', -150, 5);
      }, 5000);
      loading.id = ''

      setTimeout(() => {
            loading.id = 'escondido'
            moverDivComAnimacao2('sucess', -845, -990);
      }, 5800);
}

document.querySelector('#enviar').addEventListener('click', function(event){
      const loading = document.querySelector('.loading')
      const frete = document.querySelector('#frete')
      const quantidade = document.querySelector('#quantidade')
      event.preventDefault()
      let listaResposta = []

      if(quantidade.value === ''){
            falhou()
            quantidadeLabel.classList.add('tremer')
            setTimeout(() => {
                  quantidadeLabel.classList.remove('tremer')
            },1000);
            quantidade.style.borderColor = 'red'
      }else{
            quantidade.style.borderColor = '#24E35A'
      }

      if(frete.value === ''){
            freteLabel.classList.add('tremer')
            setTimeout(() => {
                  freteLabel.classList.remove('tremer')
            },1000);
            frete.style.borderColor = 'red'
      }else{
            frete.style.borderColor = '#24E35A'
      }

      if(valor.value === ''){
            valor.style.borderColor = 'red'
            enviarBtn.classList.add('tremer')
            setTimeout(() => {
                  enviarBtn.classList.remove('tremer')
            },1000);
      }else{
            valor.style.borderColor = '#24E35A'
      }

      if(nome.value === ''){
            nome.style.borderColor = 'red'
            enviarBtn.classList.add('tremer')
            setTimeout(() => {
                  enviarBtn.classList.remove('tremer')
            },1000);
      }else{
            nome.style.borderColor = '#24E35A'
      }


      
      if(quantidade.value != '' && frete.value != '' && nome.value != '' && valor.value != '' ) {
            const freteParcial = Number(frete.value) / Number(quantidade.value)
            for(let item of listaProdutos){
                  listaResposta.push({
                        nome: item.nome,
                        custo: Number(item.valor) + freteParcial,
                        precoSugerido: precoSugerido(Number(item.valor) + freteParcial)
                  })
            }
      
            setTimeout(() => {
                  moverDivComAnimacao('sucess', -150, 5);
            }, 5000);
            loading.id = ''
      
            setTimeout(() => {
                  let html = ''
                  for( let item of listaResposta){
                        html += `<div class="produtoModal">
                                          <p class="produtoNome">${item.nome}</p>
                                          <p class="custoFinal">R$ ${item.custo}.00</p>
                                          <p class="valorSugerido">R$ ${item.precoSugerido}.00</p>
                                    </div>`
      
                  }
      
                  produtosModal.innerHTML = html
                  modal.id = ''
                  loading.id = 'escondido'
                  moverDivComAnimacao2('sucess', -845, -990);
            }, 5800);      
      }
})

document.querySelector('.x').addEventListener('click', function(){
      window.location.reload()
})