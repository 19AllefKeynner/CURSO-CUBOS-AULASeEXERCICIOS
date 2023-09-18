const btnAdd = document.getElementById('adicionar')
const btnAddDentro = document.getElementById('add')
const modal = document.querySelector('.modal')
const cancelar = document.getElementById('cancelar')
const listagem = document.getElementById('listagem')
const selectFiltro = document.getElementById('filtro')
const inputLabel = document.getElementById("labe-custo")
const inputLucro = document.getElementById("valor-custo")
const cardEntradas = document.getElementById('card-entradas')
const cardSaidas = document.getElementById('card-saidas')
const cardLucro = document.getElementById('card-lucro')
const tipo = document.getElementById('tipo')
const excluirModal = document.querySelector('.Excluir')
const cancelarExcluir = document.getElementById('cancelar-excluir')
const excluir = document.getElementById('excluir')
const olho = document.getElementById('olhinho')
const olho1 = document.getElementById('olhinho1')
const olho2 = document.getElementById('olhinho2')
const escondeu = document.querySelector('.escondeu')
const escondeu1 = document.querySelector('.escondeu1')
const escondeu2 = document.querySelector('.escondeu2')
const info = document.querySelector('.informacoes')
const custoTipo = document.getElementById('custo-tipo')
const fechar = document.getElementById('fechar')
const ordenador = document.getElementById('ordenador')
const h2Custo = document.getElementById('data-custo')
const dataInfo = document.getElementById('data-info') 

document.addEventListener("DOMContentLoaded", function() {
  // Impedir a rolagem horizontal
  document.body.style.overflowX = "hidden";
});

 // Para ler o cookie:
 function lerCookie(nome) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(nome + '=')) {
      const cookieValue = cookie.substring(nome.length + 1);
      return JSON.parse(decodeURIComponent(cookieValue));
    }
  }
  return null;
}

function cookieExiste(nome) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(nome + '=')) {
      // O cookie com o nome desejado foi encontrado
      return true;
    }
  }
  // O cookie com o nome desejado não foi encontrado
  return false;
}


function addproduto(html){
  listagem.innerHTML = `<div class="header-listagem">
                          <h1>Descrição</h1>
                          <h1>Valor</h1>
                          <h1>Tipo</h1>
                        </div>
                        <hr class="linha">
                        ` + html

}

function atualizarCoockie(nome, valor){
   const nomeDoCookieEntradas = nome;
   const cookieValueEntradas = lerCookie(nomeDoCookieEntradas);

   let valorTotalEntradasAnterior = Number(cookieValueEntradas);

   if (cookieValueEntradas) {
     valorTotalEntradasAnterior = parseFloat(cookieValueEntradas);
   }

   const novoValorTotalEntradas = valorTotalEntradasAnterior + Number(valor);

   document.cookie = `${nomeDoCookieEntradas}=${encodeURIComponent(novoValorTotalEntradas.toString())}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

}

function atualizarCoockieMenos(nome, valor){
  const nomeDoCookieEntradas = nome;
  const cookieValueEntradas = lerCookie(nomeDoCookieEntradas);

  let valorTotalEntradasAnterior = Number(cookieValueEntradas);

  if (cookieValueEntradas) {
    valorTotalEntradasAnterior = parseFloat(cookieValueEntradas);
  }

  const novoValorTotalEntradas = valorTotalEntradasAnterior - Number(valor);

  document.cookie = `${nomeDoCookieEntradas}=${encodeURIComponent(novoValorTotalEntradas.toString())}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

}

function obterDataHoraAtual() {
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const dia = String(dataAtual.getDate()).padStart(2, '0');

  const dataHoraFormatada = `${ano}-${mes}-${dia}`;

  return dataHoraFormatada;
}

let contt = 1
olho.addEventListener('click', function(){
  if(contt === 1){
    olho.removeChild(olho.children[0])
    olho.innerHTML = '<i class="fa-solid fa-eye"></i>'
    escondeu.id =''
    cardEntradas.id = 'escondido2'
    contt += 1
  }else{
    olho.removeChild(olho.children[0])
    olho.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    escondeu.id ='escondido'
    cardEntradas.id = ''
    contt -= 1
  }
  
})

let contt1 = 1
olho1.addEventListener('click', function(){
  if(contt1 === 1){
    olho1.removeChild(olho1.children[0])
    olho1.innerHTML = '<i class="fa-solid fa-eye"></i>'
    escondeu1.id =''
    cardSaidas.style.color = 'rgba(255, 255, 255, 0)' 
    contt1 ++
  }else{
    olho1.removeChild(olho1.children[0])
    olho1.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    escondeu1.id ='escondido'
    cardSaidas.style.color = 'red'
    contt1 -= 1
  }
  
})

let contt2 = 1
olho2.addEventListener('click', function(){
  if(contt2 === 1){
    olho2.removeChild(olho2.children[0])
    olho2.innerHTML = '<i class="fa-solid fa-eye"></i>'
    escondeu2.id =''
    cardLucro.style.color = 'rgba(255, 255, 255, 0)' 
    contt2 ++
  }else{
    olho2.removeChild(olho2.children[0])
    olho2.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    escondeu2.id ='escondido'
    if(Number(lerCookie('lucro')) >= 0 ){
      cardLucro.style.color = 'green'
    }else{
      cardLucro.style.color = 'red'
    }
    contt2 -= 1
  }
  
})

cardSaidas.style.color = 'red'

if (!cookieExiste('meuCookie')){
  const dados = []
  const cookieName = "meuCookie"; // Nome do seu cookie
  const cookieValue = JSON.stringify(dados);
  document.cookie = `${cookieName}=${cookieValue}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
}

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

});

btnAdd.addEventListener('click', function(){
  modal.classList.remove('escondido')
})

cancelar.addEventListener('click', function(){
  modal.classList.add('escondido')
})

selectFiltro.addEventListener('change', function(event){
  if (event.target.value === 'sim'){
    inputLucro.classList.remove('escondido')
    inputLabel.classList.remove('escondido')
  }else{
    inputLucro.classList.add('escondido')
    inputLabel.classList.add('escondido')
  }
})

tipo.addEventListener('change', function(event){
  if (event.target.value === 'saida'){
    selectFiltro.disabled = true
  }else{
    selectFiltro.disabled = false
  }
})

ordenador.addEventListener('change', function(event){
  if (event.target.value === 'alfabetica'){
    const dadosCookieAlfa = lerCookie('meuCookie');

    dadosCookieAlfa.sort((a, b) => {
      return a.descricao.localeCompare(b.descricao);
    });

    let html = '';
    for (let item of dadosCookieAlfa) {
      let tipo = '';
    
      if (item.tipo === 'entrada') {
        tipo = '<i class="fa-solid fa-arrow-trend-up"></i>';
      } else {
        tipo = '<i class="fa-solid fa-arrow-trend-down"></i>';
      }
    
      if (item.filtro !== '') {
        html += `<div class="valores" data-filtro="true" data-custo="${item.filtro}" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                    <p class="descricao">${item.descricao}</p>
                    <p class="valor">R$ ${item.valor},00</p>
                    <p class="tipo ${item.tipo}-icon">${tipo}</p>
                  </div>`;
      } else {
        html += `<div class="valores" data-filtro="false" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                    <p class="descricao">${item.descricao}</p>
                    <p class="valor">R$ ${item.valor},00</p>
                    <p class="tipo ${item.tipo}-icon">${tipo}</p>
                  </div>`;
      }
    }

    addproduto(html)

    if(typeof(Number(lerCookie('lucro'))) === 'number'  && lerCookie('lucro') != null){
      if(contt2 === 1){
        if(Number(lerCookie('lucro')) >= 0){
          cardLucro.style.color = 'green'
        }else{
          cardLucro.style.color = 'red'
        }
        cardLucro.textContent = `R$ ${Number(lerCookie('lucro')).toFixed(2)}`;
      
      }
    }
    if (typeof(Number(lerCookie('saidas'))) === 'number'  && lerCookie('saidas') != null){
      cardSaidas.textContent = `R$ ${lerCookie('saidas').toFixed(2)}`;
    }
    if(typeof(Number(lerCookie('entradas'))) === 'number' && lerCookie('entradas') != null ){
      cardEntradas.textContent = `R$ ${lerCookie('entradas').toFixed(2)}`;
    }

    const produtos = document.querySelectorAll('.valores')

    produtos.forEach(produto => {
      produto.addEventListener('click', function(){
        excluirModal.id = ''
    
        cancelarExcluir.addEventListener('click', function(){
          excluirModal.id = 'escondido'
        })
        
        excluir.addEventListener('click', function(){
          produto.remove()
          excluirModal.id = 'escondido'
          
        })
      })
    
      produto.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // 
        info.id = ''
        dataInfo.textContent = `${(produto.dataset.datasalva).slice(0,10)}`
        console.log(produto.dataset.custo)
        if (produto.dataset.tipo === 'saida'){
          custoTipo.textContent = 'Tipo:'
          h2Custo.textContent = 'Saída'
    
        }else if (produto.dataset.tipo === 'entrada' && produto.dataset.custo != '' && produto.dataset.custo != undefined){
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ ${produto.dataset.custo}.00`
        }else{
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ 0.00`
        }
        
        
        
      });
    
    })
    
    fechar.addEventListener('click', function(){
      info.id = 'escondido'
    })

    function verificar(element){
      if (element.target.value != '' && element.key === 'Enter'){
        return true
      }
    }
    
    function filtrar( element){
      produtos.forEach(produto => {
        const nome = produto.children[0].parentElement.innerText.slice(0, produto.children[0].parentElement.innerText.indexOf('\n')).toLowerCase()
        if (!nome.includes(element)){
          console.log('teste')
          produto.classList.add('escondido')
        } else {
          produto.classList.remove('escondido')
        }
      })
    }

    const elementoOriginal = document.getElementById('busca'); 
    const cloneDoElemento = elementoOriginal.cloneNode(true); 

    // Substitua o elemento original pelo clone
    elementoOriginal.parentNode.replaceChild(cloneDoElemento, elementoOriginal);

    cloneDoElemento.addEventListener('keydown', function(event){
      if (verificar(event)){
        filtrar(event.target.value.toLowerCase())
        event.target.value = ''
      } else {
        produtos.forEach(produto => {
          produto.classList.remove('escondido')
          
        })
      }
    })

  }else if (event.target.value === 'nao'){
    const inputBusca = document.getElementById('busca')

    inputBusca.addEventListener('keydown', function(event){
      if (verificar(event)){
        filtrar(event.target.value.toLowerCase())
        event.target.value = ''
      } else {
        produtos.forEach(produto => {
          produto.classList.remove('escondido')
          
        })
      }
    })

    function verificar(element){
      if (element.target.value != '' && element.key === 'Enter'){
        return true
      }
    }

    function filtrar( element){
      produtos.forEach(produto => {
        const nome = produto.children[0].parentElement.innerText.slice(0, produto.children[0].parentElement.innerText.indexOf('\n')).toLowerCase()
        if (!nome.includes(element)){
          console.log('teste')
          produto.classList.add('escondido')
        } else {
          produto.classList.remove('escondido')
        }
      })
}
    const dadosCookie = lerCookie('meuCookie');

    let html = '';
    for (let item of dadosCookie) {
      let tipo = '';
    
      if (item.tipo === 'entrada') {
        tipo = '<i class="fa-solid fa-arrow-trend-up"></i>';
      } else {
        tipo = '<i class="fa-solid fa-arrow-trend-down"></i>';
      }
    
      if (item.filtro !== '') {
        html += `<div class="valores" data-filtro="true" data-custo="${item.filtro}" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                    <p class="descricao">${item.descricao}</p>
                    <p class="valor">R$ ${item.valor},00</p>
                    <p class="tipo ${item.tipo}-icon">${tipo}</p>
                  </div>`;
      } else {
        html += `<div class="valores" data-filtro="false" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                    <p class="descricao">${item.descricao}</p>
                    <p class="valor">R$ ${item.valor},00</p>
                    <p class="tipo ${item.tipo}-icon">${tipo}</p>
                  </div>`;
      }
    }




    addproduto(html)

    if(typeof(Number(lerCookie('lucro'))) === 'number'  && lerCookie('lucro') != null){
      if(contt2 === 1){
        if(Number(lerCookie('lucro')) >= 0){
          cardLucro.style.color = 'green'
        }else{
          cardLucro.style.color = 'red'
        }
        cardLucro.textContent = `R$ ${Number(lerCookie('lucro')).toFixed(2)}`;
      
      }}
    if (typeof(Number(lerCookie('saidas'))) === 'number'  && lerCookie('saidas') != null){
      cardSaidas.textContent = `R$ ${lerCookie('saidas').toFixed(2)}`;
    }
    if(typeof(Number(lerCookie('entradas'))) === 'number' && lerCookie('entradas') != null ){
      cardEntradas.textContent = `R$ ${lerCookie('entradas').toFixed(2)}`;
    }

    const produtos = document.querySelectorAll('.valores')

    produtos.forEach(produto => {
      produto.addEventListener('click', function(){
        excluirModal.id = ''
    
        cancelarExcluir.addEventListener('click', function(){
          excluirModal.id = 'escondido'
        })
        
        excluir.addEventListener('click', function(){
          produto.remove()
          excluirModal.id = 'escondido'
          
        })
      })
    
      produto.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // 
        info.id = ''
        dataInfo.textContent = `${(produto.dataset.datasalva).slice(0,10)}`
        console.log(produto.dataset.custo)
        if (produto.dataset.tipo === 'saida'){
          custoTipo.textContent = 'Tipo:'
          h2Custo.textContent = 'Saída'
    
        }else if (produto.dataset.tipo === 'entrada' && produto.dataset.custo != '' && produto.dataset.custo != undefined){
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ ${produto.dataset.custo}.00`
        }else{
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ 0.00`
        }
        
        
        
      });
    
    })
    
    fechar.addEventListener('click', function(){
      info.id = 'escondido'
    })

    function verificar(element){
      if (element.target.value != '' && element.key === 'Enter'){
        return true
      }
    }
    
    function filtrar( element){
      produtos.forEach(produto => {
        const nome = produto.children[0].parentElement.innerText.slice(0, produto.children[0].parentElement.innerText.indexOf('\n')).toLowerCase()
        if (!nome.includes(element)){
          console.log('teste')
          produto.classList.add('escondido')
        } else {
          produto.classList.remove('escondido')
        }
      })
    }

    const elementoOriginal = document.getElementById('busca'); 
    const cloneDoElemento = elementoOriginal.cloneNode(true); 

    elementoOriginal.parentNode.replaceChild(cloneDoElemento, elementoOriginal);

    cloneDoElemento.addEventListener('keydown', function(event){
      if (verificar(event)){
        filtrar(event.target.value.toLowerCase())
        event.target.value = ''
      } else {
        produtos.forEach(produto => {
          produto.classList.remove('escondido')
          
        })
      }
    })

  }else if (event.target.value === 'entradas'){
      const dadosCookie = lerCookie('meuCookie');

      let html = '';
      for (let item of dadosCookie) {
        let tipo = '';
      
        if (item.tipo === 'entrada') {
          tipo = '<i class="fa-solid fa-arrow-trend-up"></i>';
          if (item.filtro !== '') {
            html += `<div class="valores" data-filtro="true" data-custo="${item.filtro}" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                        <p class="descricao">${item.descricao}</p>
                        <p class="valor">R$ ${item.valor},00</p>
                        <p class="tipo ${item.tipo}-icon">${tipo}</p>
                      </div>`;
          } else {
            html += `<div class="valores" data-filtro="false" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                        <p class="descricao">${item.descricao}</p>
                        <p class="valor">R$ ${item.valor},00</p>
                        <p class="tipo ${item.tipo}-icon">${tipo}</p>
                      </div>`;
          }
        }
      
      }

      addproduto(html)

      if(typeof(Number(lerCookie('lucro'))) === 'number'  && lerCookie('lucro') != null){
        if(contt2 === 1){
          if(Number(lerCookie('lucro')) >= 0){
            cardLucro.style.color = 'green'
          }else{
            cardLucro.style.color = 'red'
          }
          cardLucro.textContent = `R$ ${Number(lerCookie('lucro')).toFixed(2)}`;
        
        }}
      if (typeof(Number(lerCookie('saidas'))) === 'number'  && lerCookie('saidas') != null){
        cardSaidas.textContent = `R$ ${lerCookie('saidas').toFixed(2)}`;
      }
      if(typeof(Number(lerCookie('entradas'))) === 'number' && lerCookie('entradas') != null ){
        cardEntradas.textContent = `R$ ${lerCookie('entradas').toFixed(2)}`;
      }

      const produtos = document.querySelectorAll('.valores')

      produtos.forEach(produto => {
        produto.addEventListener('click', function(){
          excluirModal.id = ''
      
          cancelarExcluir.addEventListener('click', function(){
            excluirModal.id = 'escondido'
          })
          
          excluir.addEventListener('click', function(){
            produto.remove()
            excluirModal.id = 'escondido'
            
          })
        })
      
        produto.addEventListener('contextmenu', function(event) {
          event.preventDefault(); // 
          info.id = ''
          dataInfo.textContent = `${(produto.dataset.datasalva).slice(0,10)}`
          if (produto.dataset.tipo === 'saida'){
            custoTipo.textContent = 'Tipo:'
            h2Custo.textContent = 'Saída'
      
          }else if (produto.dataset.tipo === 'entrada' && produto.dataset.custo != '' && produto.dataset.custo != undefined){
            custoTipo.textContent = 'Custo do produto:'
            h2Custo.textContent = `R$ ${produto.dataset.custo}.00`
          }else{
            custoTipo.textContent = 'Custo do produto:'
            h2Custo.textContent = `R$ 0.00`
          }
          
        });
      
      })
      
      fechar.addEventListener('click', function(){
        info.id = 'escondido'
      })

      function verificar(element){
        if (element.target.value != '' && element.key === 'Enter'){
          return true
        }
      }
      
      function filtrar( element){
        produtos.forEach(produto => {
          const nome = produto.children[0].parentElement.innerText.slice(0, produto.children[0].parentElement.innerText.indexOf('\n')).toLowerCase()
          if (!nome.includes(element)){
            console.log('teste')
            produto.classList.add('escondido')
          } else {
            produto.classList.remove('escondido')
          }
        })
      }
  
      const elementoOriginal = document.getElementById('busca'); 
      const cloneDoElemento = elementoOriginal.cloneNode(true); 
  
      // Substitua o elemento original pelo clone
      elementoOriginal.parentNode.replaceChild(cloneDoElemento, elementoOriginal);
  
      cloneDoElemento.addEventListener('keydown', function(event){
        if (verificar(event)){
          filtrar(event.target.value.toLowerCase())
          event.target.value = ''
        } else {
          produtos.forEach(produto => {
            produto.classList.remove('escondido')
            
          })
        }
      })


    }else if (event.target.value === 'saidas'){
      const dadosCookie = lerCookie('meuCookie');

      let html = '';
      for (let item of dadosCookie) {
        let tipo = '';
      
        if (item.tipo === 'saida') {
          tipo = '<i class="fa-solid fa-arrow-trend-down"></i>';
          if (item.filtro !== '') {
            html += `<div class="valores" data-filtro="true" data-custo="${item.filtro}" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                        <p class="descricao">${item.descricao}</p>
                        <p class="valor">R$ ${item.valor},00</p>
                        <p class="tipo ${item.tipo}-icon">${tipo}</p>
                      </div>`;
          } else {
            html += `<div class="valores" data-filtro="false" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                        <p class="descricao">${item.descricao}</p>
                        <p class="valor">R$ ${item.valor},00</p>
                        <p class="tipo ${item.tipo}-icon">${tipo}</p>
                      </div>`;
          }
        }
      
      }

      addproduto(html)

      if(typeof(Number(lerCookie('lucro'))) === 'number'  && lerCookie('lucro') != null){
        if(contt2 === 1){
          if(Number(lerCookie('lucro')) >= 0){
            cardLucro.style.color = 'green'
          }else{
            cardLucro.style.color = 'red'
          }
          cardLucro.textContent = `R$ ${Number(lerCookie('lucro')).toFixed(2)}`;
        
        }}
      if (typeof(Number(lerCookie('saidas'))) === 'number'  && lerCookie('saidas') != null){
        cardSaidas.textContent = `R$ ${lerCookie('saidas').toFixed(2)}`;
      }
      if(typeof(Number(lerCookie('entradas'))) === 'number' && lerCookie('entradas') != null ){
        cardEntradas.textContent = `R$ ${lerCookie('entradas').toFixed(2)}`;
      }

      const produtos = document.querySelectorAll('.valores')

      produtos.forEach(produto => {
        produto.addEventListener('click', function(){
          excluirModal.id = ''
      
          cancelarExcluir.addEventListener('click', function(){
            excluirModal.id = 'escondido'
          })
          
          excluir.addEventListener('click', function(){
            produto.remove()
            excluirModal.id = 'escondido'
            
          })
        })
      
        produto.addEventListener('contextmenu', function(event) {
          event.preventDefault(); // 
          info.id = ''
          dataInfo.textContent = `${(produto.dataset.datasalva).slice(0,10)}`
          console.log(produto.dataset.custo)
          if (produto.dataset.tipo === 'saida'){
            custoTipo.textContent = 'Tipo:'
            h2Custo.textContent = 'Saída'
      
          }else if (produto.dataset.tipo === 'entrada' && produto.dataset.custo != '' && produto.dataset.custo != undefined){
            custoTipo.textContent = 'Custo do produto:'
            h2Custo.textContent = `R$ ${produto.dataset.custo}.00`
          }else{
            custoTipo.textContent = 'Custo do produto:'
            h2Custo.textContent = `R$ 0.00`
          }
          
          
          
        });
      
      })
      
      fechar.addEventListener('click', function(){
        info.id = 'escondido'
      })

      function verificar(element){
        if (element.target.value != '' && element.key === 'Enter'){
          return true
        }
      }
      
      function filtrar( element){
        produtos.forEach(produto => {
          const nome = produto.children[0].parentElement.innerText.slice(0, produto.children[0].parentElement.innerText.indexOf('\n')).toLowerCase()
          if (!nome.includes(element)){
            console.log('teste')
            produto.classList.add('escondido')
          } else {
            produto.classList.remove('escondido')
          }
        })
      }

      const elementoOriginal = document.getElementById('busca'); 
      const cloneDoElemento = elementoOriginal.cloneNode(true); 

      // Substitua o elemento original pelo clone
      elementoOriginal.parentNode.replaceChild(cloneDoElemento, elementoOriginal);

      cloneDoElemento.addEventListener('keydown', function(event){
        if (verificar(event)){
          filtrar(event.target.value.toLowerCase())
          event.target.value = ''
        } else {
          produtos.forEach(produto => {
            produto.classList.remove('escondido')
            
          })
        }
      })
        
        
      
      

  }else if(event.target.value === 'recentes'){
    const dadosCookie = lerCookie('meuCookie');

    dadosCookie.reverse();
    
    let html = '';
    for (let item of dadosCookie) {
      let tipo = '';
    
      if (item.tipo === 'entrada') {
        tipo = '<i class="fa-solid fa-arrow-trend-up"></i>';
      } else {
        tipo = '<i class="fa-solid fa-arrow-trend-down"></i>';
      }
    
      if (item.filtro !== '') {
        html += `<div class="valores" data-filtro="true" data-custo="${item.filtro}" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                    <p class="descricao">${item.descricao}</p>
                    <p class="valor">R$ ${item.valor},00</p>
                    <p class="tipo ${item.tipo}-icon">${tipo}</p>
                  </div>`;
      } else {
        html += `<div class="valores" data-filtro="false" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                    <p class="descricao">${item.descricao}</p>
                    <p class="valor">R$ ${item.valor},00</p>
                    <p class="tipo ${item.tipo}-icon">${tipo}</p>
                  </div>`;
      }
    }
    
    // Agora, 'html' contém os itens ordenados ao contrário sem considerar a data
    
    addproduto(html)

    if(typeof(Number(lerCookie('lucro'))) === 'number'  && lerCookie('lucro') != null){
      if(contt2 === 1){
        if(Number(lerCookie('lucro')) >= 0){
          cardLucro.style.color = 'green'
        }else{
          cardLucro.style.color = 'red'
        }
        cardLucro.textContent = `R$ ${Number(lerCookie('lucro')).toFixed(2)}`;
      
      }}
    if (typeof(Number(lerCookie('saidas'))) === 'number'  && lerCookie('saidas') != null){
      cardSaidas.textContent = `R$ ${lerCookie('saidas').toFixed(2)}`;
    }
    if(typeof(Number(lerCookie('entradas'))) === 'number' && lerCookie('entradas') != null ){
      cardEntradas.textContent = `R$ ${lerCookie('entradas').toFixed(2)}`;
    }

    const produtos = document.querySelectorAll('.valores')

    produtos.forEach(produto => {
      produto.addEventListener('click', function(){
        excluirModal.id = ''
    
        cancelarExcluir.addEventListener('click', function(){
          excluirModal.id = 'escondido'
        })
        
        excluir.addEventListener('click', function(){
          produto.remove()
          excluirModal.id = 'escondido'
          
        })
      })
    
      produto.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // 
        info.id = ''
        dataInfo.textContent = `${(produto.dataset.datasalva).slice(0,10)}`
        console.log(produto.dataset.custo)
        if (produto.dataset.tipo === 'saida'){
          custoTipo.textContent = 'Tipo:'
          h2Custo.textContent = 'Saída'
    
        }else if (produto.dataset.tipo === 'entrada' && produto.dataset.custo != '' && produto.dataset.custo != undefined){
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ ${produto.dataset.custo}.00`
        }else{
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ 0.00`
        }
        
        
        
      });
    
    })
    
    fechar.addEventListener('click', function(){
      info.id = 'escondido'
    })


    function verificar(element){
      if (element.target.value != '' && element.key === 'Enter'){
        return true
      }
    }
    
    function filtrar( element){
      produtos.forEach(produto => {
        const nome = produto.children[0].parentElement.innerText.slice(0, produto.children[0].parentElement.innerText.indexOf('\n')).toLowerCase()
        if (!nome.includes(element)){
          console.log('teste')
          produto.classList.add('escondido')
        } else {
          produto.classList.remove('escondido')
        }
      })
    }

    const elementoOriginal = document.getElementById('busca'); 
    const cloneDoElemento = elementoOriginal.cloneNode(true); 

    // Substitua o elemento original pelo clone
    elementoOriginal.parentNode.replaceChild(cloneDoElemento, elementoOriginal);

    cloneDoElemento.addEventListener('keydown', function(event){
      if (verificar(event)){
        filtrar(event.target.value.toLowerCase())
        event.target.value = ''
      } else {
        produtos.forEach(produto => {
          produto.classList.remove('escondido')
          
        })
      }
    })


   
}

})


const dadosCookie = lerCookie('meuCookie');

let html = '';
for (let item of dadosCookie) {
  let tipo = '';
  

  if (item.tipo === 'entrada') {
    tipo = '<i class="fa-solid fa-arrow-trend-up"></i>';
  } else {
    tipo = '<i class="fa-solid fa-arrow-trend-down"></i>';
  }

  if (item.filtro != '') {
    html += `<div class="valores" data-filtro="true" data-custo="${item.filtro}" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                <p class="descricao">${item.descricao}</p>
                <p class="valor">R$ ${item.valor},00</p>
                <p class="tipo ${item.tipo}-icon">${tipo}</p>
              </div>`;
  } else {
    html += `<div class="valores" data-filtro="false" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
                <p class="descricao">${item.descricao}</p>
                <p class="valor">R$ ${item.valor},00</p>
                <p class="tipo ${item.tipo}-icon">${tipo}</p>
              </div>`;
  }
}




addproduto(html)

if(typeof(Number(lerCookie('lucro'))) === 'number'  && lerCookie('lucro') != null){
  if(Number(lerCookie('lucro')) >= 0 ){
    cardLucro.style.color = 'green'
  }else{
    cardLucro.style.color = 'red'
  }
  cardLucro.textContent = `R$ ${Number(lerCookie('lucro')).toFixed(2)}`;
}
if (typeof(Number(lerCookie('saidas'))) === 'number'  && lerCookie('saidas') != null){
  cardSaidas.textContent = `R$ ${lerCookie('saidas').toFixed(2)}`;
}
if(typeof(Number(lerCookie('entradas'))) === 'number' && lerCookie('entradas') != null ){
  cardEntradas.textContent = `R$ ${lerCookie('entradas').toFixed(2)}`;
}

const produtos = document.querySelectorAll('.valores')

function dataAtributoExiste(elemento, nomeDoAtributo) {
  return elemento.hasAttribute(`data-${nomeDoAtributo}`);
}

produtos.forEach(produto => {
  produto.addEventListener('click', function(){
    excluirModal.id = ''

    cancelarExcluir.addEventListener('click', function(){
      excluirModal.id = 'escondido'
    })
    
    excluir.addEventListener('click', function(){
      produto.remove()
      excluirModal.id = 'escondido'
      
    })
  })

  produto.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // 
    info.id = ''
    dataInfo.textContent = `${(produto.dataset.datasalva).slice(0,10)}`
    if (produto.dataset.tipo === 'saida'){
      custoTipo.textContent = 'Tipo:'
      h2Custo.textContent = 'Saída'

    }else if (produto.dataset.tipo === 'entrada' && produto.dataset.custo != '' && produto.dataset.custo != undefined){
      custoTipo.textContent = 'Custo do produto:'
      h2Custo.textContent = `R$ ${produto.dataset.custo}.00`
    }else{
      custoTipo.textContent = 'Custo do produto:'
      h2Custo.textContent = `R$ 0.00`
    }
    
    
  });

})

function verificar(element){
  if (element.target.value != '' && element.key === 'Enter'){
    return true
  }
}

function filtrar( element){
  produtos.forEach(produto => {
    const nome = produto.children[0].parentElement.innerText.slice(0, produto.children[0].parentElement.innerText.indexOf('\n')).toLowerCase()
    if (!nome.includes(element)){
      console.log('teste')
      produto.classList.add('escondido')
    } else {
      produto.classList.remove('escondido')
    }
  })
}

function contEvent(event){
  if (verificar(event)){
    filtrar(event.target.value.toLowerCase())
    event.target.value = ''
  } else {
    produtos.forEach(produto => {
      produto.classList.remove('escondido')
      
    })
  }
  
}

fechar.addEventListener('click', function(){
  info.id = 'escondido'
})

const inputsBusca = document.querySelectorAll('#busca')

inputsBusca.forEach(inputbusca => {
  inputbusca.addEventListener('keydown', contEvent)
})

btnAddDentro.addEventListener('click', function(){
  modal.classList.add('escondido')
  const inputDescricao = document.getElementById('descricao')
  const inputValor = document.getElementById('valor')
  const selectTipo = document.getElementById('tipo')


  const dataHoraAtual = obterDataHoraAtual();

  const dadosAtuais =  { descricao: inputDescricao.value, valor: inputValor.value, tipo: selectTipo.value, filtro: inputLucro.value, data: dataHoraAtual}

  const cookieName = "meuCookie";
  const cookieValue = lerCookie(cookieName);
  
  let dadosDoCookie = [];
  
    // Para acessar os dados do cookie:
    const dadossCookie = lerCookie(cookieName);
    for(let item of dadossCookie){
      dadosDoCookie.push(item)
    }
  
  if (cookieValue) {
    try {
      dadosDoCookie = JSON.parse(cookieValue);
    } catch (error) {
      console.error();
    }
  }

  dadosDoCookie.push(dadosAtuais);
  const novoValor = JSON.stringify(dadosDoCookie);
  document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
  const dadosCookie = lerCookie(cookieName);


  let html = ''
  for(let item of dadosCookie){
    
    let tipo = ''

    if (item.tipo === 'entrada'){
      tipo = '<i class="fa-solid fa-arrow-trend-up"></i>'

    }else{
      tipo = '<i class="fa-solid fa-arrow-trend-down"></i>'
    }


    if(inputLucro.value != ''){
      console.log(item.filtro)
      html += `<div class="valores" data-filtro="true" data-custo="${item.filtro}" data-tipo="${item.tipo}" data-dataSalva="${item.data}">
              <p class="descricao">${item.descricao}</p>
              <p class="valor">R$ ${item.valor},00</p>
              <p class="tipo ${item.tipo}-icon">${tipo}</p>
            </div>`
    }else{
      html += `<div class="valores" data-filtro="false" data-tipo="${item.tipo}" data-dataSalva="${item.data}>
              <p class="descricao">${item.descricao}</p>
              <p class="valor">R$ ${item.valor},00</p>
              <p class="tipo ${item.tipo}-icon">${tipo}</p>
            </div>`
    }
    

  }

  addproduto(html)

  if(selectTipo.value === 'entrada'){
    if(!cookieExiste('entradas')){
      const nomeDoCookie = "entradas";

      const inputValor = document.getElementById('valor')

      const valorDoCookie = Number(inputValor.value)
      
      // Configurar o cookie com o valor
      document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

    }else{
      const inputValor = document.getElementById('valor')
      atualizarCoockie('entradas', inputValor.value)
    }
  
  }else{
    if(!cookieExiste('saidas')){
      const nomeDoCookie = "saidas";
      const inputValor = document.getElementById('valor')
      const valorDoCookie = Number(inputValor.value)
      document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

      if(!cookieExiste('lucro')){
        const nomeDoCookie = "lucro";
        const valorDoCookie = 0 -  Number(inputValor.value)
        document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
  
      }else{
        const inputValor = document.getElementById('valor')
        atualizarCoockieMenos('lucro', inputValor.value)
      }
    }else{
          const inputValor = document.getElementById('valor')
          atualizarCoockie('saidas', inputValor.value)
 
          if(!cookieExiste('lucro')){
            const nomeDoCookie = "lucro";
            const valorDoCookie = 0 -  Number(inputValor.value)
            document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
      
          }else{
            const inputValor = document.getElementById('valor')
            atualizarCoockieMenos('lucro', inputValor.value)
          }

        }
        
  }
    if(selectTipo.value === 'entrada'){
      if(inputLucro.value != ''){
        if(!cookieExiste('lucro')){
          const nomeDoCookie = "lucro";
          const inputValor = document.getElementById('valor')
          const inputLucro = document.getElementById('valor-custo')

          const valorDoCookie = Number(inputValor.value) - Number(inputLucro.value) 
          document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
    
        }else{
     
          const inputValor = document.getElementById('valor')
          const inputLucro= document.getElementById('valor-custo')
          atualizarCoockie('lucro', inputValor.value - inputLucro.value) }

      }else{
        if(!cookieExiste('lucro')){
          const nomeDoCookie = "lucro";
          const valorDoCookie = Number(inputValor.value)
          document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
    
        }else{
     
          const inputValor = document.getElementById('valor')
          atualizarCoockie('lucro', inputValor.value)
        }
      }
    }

    if(typeof(Number(lerCookie('lucro'))) === 'number'  && lerCookie('lucro') != null){
      cardLucro.textContent = `R$ ${Number(lerCookie('lucro')).toFixed(2)}`;
      if(Number(lerCookie('lucro')) >= 0 ){
        cardLucro.style.color = 'green'
      }else{
        cardLucro.style.color = 'red'
      }
    }
    if (typeof(Number(lerCookie('saidas'))) === 'number'  && lerCookie('saidas') != null){
      cardSaidas.textContent = `R$ ${lerCookie('saidas').toFixed(2)}`;
    }
    if(typeof(Number(lerCookie('entradas'))) === 'number' && lerCookie('entradas') != null ){
      cardEntradas.textContent = `R$ ${lerCookie('entradas').toFixed(2)}`;
    }


    inputDescricao.value = ''
    inputValor.value = ''
    inputLucro.classList.add('escondido')

    const produtos = document.querySelectorAll('.valores')

    produtos.forEach(produto => {
      produto.addEventListener('click', function(){
        excluirModal.id = ''
    
        cancelarExcluir.addEventListener('click', function(){
          excluirModal.id = 'escondido'
        })
        
        excluir.addEventListener('click', function(){
          produto.remove()
          excluirModal.id = 'escondido'
          
        })
      })
    
      produto.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // 
        info.id = ''
        dataInfo.textContent = `${(produto.dataset.datasalva).slice(0,10)}`
        console.log(produto.dataset.custo)
        if (produto.dataset.tipo === 'saida'){
          custoTipo.textContent = 'Tipo:'
          h2Custo.textContent = 'Saída'
    
        }else if (produto.dataset.tipo === 'entrada' && produto.dataset.custo != '' && produto.dataset.custo != undefined){
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ ${produto.dataset.custo}.00`
        }else{
          custoTipo.textContent = 'Custo do produto:'
          h2Custo.textContent = `R$ 0.00`
        }
        
        
      });
    
    })
    
    fechar.addEventListener('click', function(){
      info.id = 'escondido'
    })

    ordenador.value = 'nao'
    location.reload();

 
})
