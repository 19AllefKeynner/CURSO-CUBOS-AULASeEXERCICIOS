const adicionarProduto = document.querySelector('#adicionar')
const modalAdd = document.querySelector('.modal')
const add = document.querySelector('#add')
const cancelar = document.querySelector('#cancelar')
const modalExcluir = document.querySelector('.Excluir')
const cancelarExcluir = document.querySelector('#cancelar-excluir')
const excluir = document.querySelector('#excluir')
const pLucro = document.querySelector('#card-lucro')
const pInvestimento = document.querySelector('#card-investimento')
const pQuantidade= document.querySelector('#card-quantidade')
const ordenador = document.getElementById('ordenador')
const escondeu2 = document.querySelector('.escondeu2')
const olho2 = document.getElementById('olhinho2')
const escondeu1 = document.querySelector('.escondeu1')
const olho1 = document.getElementById('olhinho1')

function cookieExiste(nome) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(nome + '=')) {
          return true;
        }
      }
      return false;
} 

function verificar(element){
      if (element.target.value != '' && element.key === 'Enter'){
        return true
      }
}
    
function filtrar( element){
      produtos.forEach(produto => {
            const nome = produto.children[1].textContent
            if (!nome.includes(element)){
            console.log('teste')
            produto.classList.add('escondido')
            } else {
            produto.classList.remove('escondido')
            }
      })
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
    

function contEvent(event){
      const produtos = document.querySelectorAll('.valores')
      if (verificar(event)){
        filtrar(event.target.value.toLowerCase())
        event.target.value = ''
      } else {
        produtos.forEach(produto => {
          produto.classList.remove('escondido')
        })
      } 
}  

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
    
function addproduto(html){
      listagem.innerHTML = `<div class="header-listagem">
                                    <h1>Quantidade</h1>
                                    <h1>Nome</h1>
                                    <h1>Valor</h1>
                                    <h1>Custo</h1>
                              </div>
                              <hr class="linha">` + html

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

if (!cookieExiste('meuCookieEstoque')){
      const dados = []
      const cookieName = "meuCookieEstoque"; 
      const cookieValue = JSON.stringify(dados);
      document.cookie = `${cookieName}=${cookieValue}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
    }

adicionarProduto.addEventListener('click', function(){
      modalAdd.classList.remove('escondido')
})

cancelar.addEventListener('click', function(){
      modalAdd.classList.add('escondido')
})

cancelarExcluir.addEventListener('click', function(){
      modalExcluir.id = 'escondido'
})

let contt1 = 1
olho1.addEventListener('click', function(){
  if(contt1 === 1){
    olho1.removeChild(olho1.children[0])
    olho1.innerHTML = '<i class="fa-solid fa-eye"></i>'
    escondeu1.id =''
    pInvestimento.style.color = 'rgba(255, 255, 255, 0)' 
    contt1 ++
  }else{
    olho1.removeChild(olho1.children[0])
    olho1.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    escondeu1.id ='escondido'
    pInvestimento.style.color = '#149BCC'
    contt1 -= 1
  }
  
})

let contt2 = 1
olho2.addEventListener('click', function(){
  if(contt2 === 1){
    olho2.removeChild(olho2.children[0])
    olho2.innerHTML = '<i class="fa-solid fa-eye"></i>'
    escondeu2.id =''
    pLucro.style.color = 'rgba(255, 255, 255, 0)' 
    contt2 ++
  }else{
    olho2.removeChild(olho2.children[0])
    olho2.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    escondeu2.id ='escondido'
    pLucro.style.color = 'green'
    contt2 -= 1
  }
  
})

ordenador.addEventListener('change', function(event){
      if (event.target.value === 'alfabetica'){
            const dadosCookieAlfa = lerCookie('meuCookieEstoque');
      
            dadosCookieAlfa.sort((a, b) => {
                  return a.nome.localeCompare(b.nome);
            });
      
                  
            let html = '';

            for (let item of dadosCookieAlfa) {
            html += `<div class="valores" data-categoria="${item.categoria}" data-id="${item.id}">
                              <p class="quantidade">${item.quantidade}</p>
                              <p class="nome">${item.nome}</p>
                              <p class="valor">R$ ${item.valor},00</p>
                              <p class="custo">R$ ${item.custo},00</p>
                        </div>`
            }

            addproduto(html)

            if(typeof(Number(lerCookie('lucroEstoque'))) === 'number'  && lerCookie('lucroEstoque') != null){
                  pLucro.textContent = `R$ ${Number(lerCookie('lucroEstoque')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('investimento'))) === 'number'  && lerCookie('investimento') != null){
                  pInvestimento.textContent = `R$ ${Number(lerCookie('investimento')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('quantidade'))) === 'number'  && lerCookie('quantidade') != null){
                  pQuantidade.textContent = `${Number(lerCookie('quantidade'))} Peças`;
            }
      
            addproduto(html)
            const todosProdutos = document.querySelectorAll('.valores')
            const produtos = document.querySelectorAll('.valores')

            todosProdutos.forEach(produto => {
                  produto.addEventListener('click', function(){
                        console.log('teste')
                        modalExcluir.id = ''
            
                        excluir.addEventListener('click', function(){
                              modalExcluir.id = 'escondido'
                              const quantidade = Number(produto.children[0].textContent)
                              const cookieName = "meuCookieEstoque";
                              const cookieValue = lerCookie(cookieName);

                              console.log(quantidade)
                              if (quantidade === 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', Number(item.valor) - Number(item.custo))
                                            atualizarCoockieMenos('investimento', Number(item.custo))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
                                  
            
                              }else if (quantidade > 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', (Number(item.valor) - Number(item.custo)) * Number(item.quantidade))
                                            atualizarCoockieMenos('investimento', Number(item.custo) * Number(item.quantidade))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }

                                    window.location.reload()
                                   
                              }
                              
                        })
                  })
            
                 
            })

            function verificar(element){
                  if (element.target.value != '' && element.key === 'Enter'){
                    return true
                  }
                }
                
            function filtrar( element){
                  produtos.forEach(produto => {
                        const nome = produto.children[1].textContent
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


      }else if (event.target.value === 'saias'){
            const dadosCookie = lerCookie('meuCookieEstoque');
      
            let html = '';

            for (let item of dadosCookie) {
                  if(item.categoria.toLowerCase() === 'saias' ){
                        html += `<div class="valores" data-categoria="${item.categoria}" data-id="${item.id}">
                                    <p class="quantidade">${item.quantidade}</p>
                                    <p class="nome">${item.nome}</p>
                                    <p class="valor">R$ ${item.valor},00</p>
                                    <p class="custo">R$ ${item.custo},00</p>
                              </div>`
                  }
            }

            addproduto(html)

            if(typeof(Number(lerCookie('lucroEstoque'))) === 'number'  && lerCookie('lucroEstoque') != null){
                  pLucro.textContent = `R$ ${Number(lerCookie('lucroEstoque')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('investimento'))) === 'number'  && lerCookie('investimento') != null){
                  pInvestimento.textContent = `R$ ${Number(lerCookie('investimento')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('quantidade'))) === 'number'  && lerCookie('quantidade') != null){
                  pQuantidade.textContent = `${Number(lerCookie('quantidade'))} Peças`;
            }
      
            addproduto(html)
            const todosProdutos = document.querySelectorAll('.valores')
            todosProdutos.forEach(produto => {
                  produto.addEventListener('click', function(){
                        console.log('teste')
                        modalExcluir.id = ''
            
                        excluir.addEventListener('click', function(){
                              modalExcluir.id = 'escondido'
                              const quantidade = Number(produto.children[0].textContent)
                              const cookieName = "meuCookieEstoque";
                              const cookieValue = lerCookie(cookieName);

                              console.log(quantidade)
                              if (quantidade === 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', Number(item.valor) - Number(item.custo))
                                            atualizarCoockieMenos('investimento', Number(item.custo))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
            
                              }else if (quantidade > 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', (Number(item.valor) - Number(item.custo)) * Number(item.quantidade))
                                            atualizarCoockieMenos('investimento', Number(item.custo) * Number(item.quantidade))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
                                   
                              }
                              
                        })
                  })
            
                 
            })

            const produtos = document.querySelectorAll('.valores')

            function verificar(element){
                  if (element.target.value != '' && element.key === 'Enter'){
                    return true
                  }
                }
                
            function filtrar( element){
                  produtos.forEach(produto => {
                        const nome = produto.children[1].textContent
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

      }else if (event.target.value === 'vestidos'){
            const dadosCookie = lerCookie('meuCookieEstoque');
      
            let html = '';

            for (let item of dadosCookie) {
                  if(item.categoria.toLowerCase() === 'vestidos' ){
                        html += `<div class="valores" data-categoria="${item.categoria}" data-id="${item.id}">
                                    <p class="quantidade">${item.quantidade}</p>
                                    <p class="nome">${item.nome}</p>
                                    <p class="valor">R$ ${item.valor},00</p>
                                    <p class="custo">R$ ${item.custo},00</p>
                              </div>`
                  }
            }

            addproduto(html)

            if(typeof(Number(lerCookie('lucroEstoque'))) === 'number'  && lerCookie('lucroEstoque') != null){
                  pLucro.textContent = `R$ ${Number(lerCookie('lucroEstoque')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('investimento'))) === 'number'  && lerCookie('investimento') != null){
                  pInvestimento.textContent = `R$ ${Number(lerCookie('investimento')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('quantidade'))) === 'number'  && lerCookie('quantidade') != null){
                  pQuantidade.textContent = `${Number(lerCookie('quantidade'))} Peças`;
            }
      
            addproduto(html)
            const todosProdutos = document.querySelectorAll('.valores')
            todosProdutos.forEach(produto => {
                  produto.addEventListener('click', function(){
                        console.log('teste')
                        modalExcluir.id = ''
            
                        excluir.addEventListener('click', function(){
                              modalExcluir.id = 'escondido'
                              const quantidade = Number(produto.children[0].textContent)
                              const cookieName = "meuCookieEstoque";
                              const cookieValue = lerCookie(cookieName);

                              console.log(quantidade)
                              if (quantidade === 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', Number(item.valor) - Number(item.custo))
                                            atualizarCoockieMenos('investimento', Number(item.custo))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
            
                              }else if (quantidade > 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', (Number(item.valor) - Number(item.custo)) * Number(item.quantidade))
                                            atualizarCoockieMenos('investimento', Number(item.custo) * Number(item.quantidade))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
                                   
                              }
                              
                        })
                  })
            
                 
            })

            const produtos = document.querySelectorAll('.valores')

            function verificar(element){
                  if (element.target.value != '' && element.key === 'Enter'){
                    return true
                  }
                }
                
            function filtrar( element){
                  produtos.forEach(produto => {
                        const nome = produto.children[1].textContent
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

      }else if (event.target.value === 'croppeds'){
            const dadosCookie = lerCookie('meuCookieEstoque');
      
            let html = '';

            for (let item of dadosCookie) {
                  if(item.categoria.toLowerCase() === 'croppeds' ){
                        html += `<div class="valores" data-categoria="${item.categoria}" data-id="${item.id}">
                                    <p class="quantidade">${item.quantidade}</p>
                                    <p class="nome">${item.nome}</p>
                                    <p class="valor">R$ ${item.valor},00</p>
                                    <p class="custo">R$ ${item.custo},00</p>
                              </div>`
                  }
            }

            addproduto(html)

            if(typeof(Number(lerCookie('lucroEstoque'))) === 'number'  && lerCookie('lucroEstoque') != null){
                  pLucro.textContent = `R$ ${Number(lerCookie('lucroEstoque')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('investimento'))) === 'number'  && lerCookie('investimento') != null){
                  pInvestimento.textContent = `R$ ${Number(lerCookie('investimento')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('quantidade'))) === 'number'  && lerCookie('quantidade') != null){
                  pQuantidade.textContent = `${Number(lerCookie('quantidade'))} Peças`;
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
      
            addproduto(html)
            const todosProdutos = document.querySelectorAll('.valores')
            todosProdutos.forEach(produto => {
                  produto.addEventListener('click', function(){
                        console.log('teste')
                        modalExcluir.id = ''
            
                        excluir.addEventListener('click', function(){
                              modalExcluir.id = 'escondido'
                              const quantidade = Number(produto.children[0].textContent)
                              const cookieName = "meuCookieEstoque";
                              const cookieValue = lerCookie(cookieName);

                              console.log(quantidade)
                              if (quantidade === 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', Number(item.valor) - Number(item.custo))
                                            atualizarCoockieMenos('investimento', Number(item.custo))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
            
                              }else if (quantidade > 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', (Number(item.valor) - Number(item.custo)) * Number(item.quantidade))
                                            atualizarCoockieMenos('investimento', Number(item.custo) * Number(item.quantidade))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
                              }
                              
                        })
                  })
            
                 
            })
           
            const produtos = document.querySelectorAll('.valores')

            function verificar(element){
                  if (element.target.value != '' && element.key === 'Enter'){
                    return true
                  }
                }
                
            function filtrar( element){
                  produtos.forEach(produto => {
                        const nome = produto.children[1].textContent
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

      }else if (event.target.value === 'nao'){
            const dadosCookie = lerCookie('meuCookieEstoque');
      
            let html = '';

            for (let item of dadosCookie) {
                  html += `<div class="valores" data-categoria="${item.categoria}" data-id="${item.id}">
                              <p class="quantidade">${item.quantidade}</p>
                              <p class="nome">${item.nome}</p>
                              <p class="valor">R$ ${item.valor},00</p>
                              <p class="custo">R$ ${item.custo},00</p>
                        </div>`
            
            }

            addproduto(html)

            if(typeof(Number(lerCookie('lucroEstoque'))) === 'number'  && lerCookie('lucroEstoque') != null){
                  pLucro.textContent = `R$ ${Number(lerCookie('lucroEstoque')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('investimento'))) === 'number'  && lerCookie('investimento') != null){
                  pInvestimento.textContent = `R$ ${Number(lerCookie('investimento')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('quantidade'))) === 'number'  && lerCookie('quantidade') != null){
                  pQuantidade.textContent = `${Number(lerCookie('quantidade'))} Peças`;
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
      
            addproduto(html)
            const todosProdutos = document.querySelectorAll('.valores')
            todosProdutos.forEach(produto => {
                  produto.addEventListener('click', function(){
                        console.log('teste')
                        modalExcluir.id = ''
            
                        excluir.addEventListener('click', function(){
                              modalExcluir.id = 'escondido'
                              const quantidade = Number(produto.children[0].textContent)
                              const cookieName = "meuCookieEstoque";
                              const cookieValue = lerCookie(cookieName);

                              console.log(quantidade)
                              if (quantidade === 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', Number(item.valor) - Number(item.custo))
                                            atualizarCoockieMenos('investimento', Number(item.custo))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
            
                              }else if (quantidade > 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', (Number(item.valor) - Number(item.custo)) * Number(item.quantidade))
                                            atualizarCoockieMenos('investimento', Number(item.custo) * Number(item.quantidade))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
                              }
                              
                        })
                  })
            
                 
            })
           
            const produtos = document.querySelectorAll('.valores')

            function verificar(element){
                  if (element.target.value != '' && element.key === 'Enter'){
                    return true
                  }
                }
                
            function filtrar( element){
                  produtos.forEach(produto => {
                        const nome = produto.children[1].textContent
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

      }else if (event.target.value === 'outros'){
            const dadosCookie = lerCookie('meuCookieEstoque');
      
            let html = '';

            for (let item of dadosCookie) {
                  if(item.categoria.toLowerCase() === 'outros' ){
                        html += `<div class="valores" data-categoria="${item.categoria}" data-id="${item.id}">
                                    <p class="quantidade">${item.quantidade}</p>
                                    <p class="nome">${item.nome}</p>
                                    <p class="valor">R$ ${item.valor},00</p>
                                    <p class="custo">R$ ${item.custo},00</p>
                              </div>`
                  }
            }

            addproduto(html)

            if(typeof(Number(lerCookie('lucroEstoque'))) === 'number'  && lerCookie('lucroEstoque') != null){
                  pLucro.textContent = `R$ ${Number(lerCookie('lucroEstoque')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('investimento'))) === 'number'  && lerCookie('investimento') != null){
                  pInvestimento.textContent = `R$ ${Number(lerCookie('investimento')).toFixed(2)}`;
            }
            if(typeof(Number(lerCookie('quantidade'))) === 'number'  && lerCookie('quantidade') != null){
                  pQuantidade.textContent = `${Number(lerCookie('quantidade'))} Peças`;
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
      
            addproduto(html)
            const todosProdutos = document.querySelectorAll('.valores')
            todosProdutos.forEach(produto => {
                  produto.addEventListener('click', function(){
                        console.log('teste')
                        modalExcluir.id = ''
            
                        excluir.addEventListener('click', function(){
                              modalExcluir.id = 'escondido'
                              const quantidade = Number(produto.children[0].textContent)
                              const cookieName = "meuCookieEstoque";
                              const cookieValue = lerCookie(cookieName);

                              console.log(quantidade)
                              if (quantidade === 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', Number(item.valor) - Number(item.custo))
                                            atualizarCoockieMenos('investimento', Number(item.custo))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
            
                              }else if (quantidade > 1){
                                    const id = produto.dataset.id
                                    for (let item of cookieValue){
                                          if (Number(item.id) === Number(id)){
                                            atualizarCoockieMenos('lucroEstoque', (Number(item.valor) - Number(item.custo)) * Number(item.quantidade))
                                            atualizarCoockieMenos('investimento', Number(item.custo) * Number(item.quantidade))
                                            atualizarCoockieMenos('quantidade', Number(item.quantidade))
                                          
                                            const cookieValue = lerCookie(cookieName);
                                            let dadosDoCookie = [];
                                    
                                            const dadossCookie = lerCookie(cookieName);
                                            for(let item of dadossCookie){
                                              if(Number(item.id) != Number(id)){
                                                dadosDoCookie.push(item)
                                              }
                                            }
                                            if (cookieValue) {
                                              try {
                                                dadosDoCookie = JSON.parse(cookieValue);
                                              } catch (error) {
                                                console.error();
                                              }
                                            }
                                            const novoValor = JSON.stringify(dadosDoCookie);
                                            document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                                          }
                                    }
                                    window.location.reload()
                              }
                              
                        })
                  })
            
                 
            })
           
            const produtos = document.querySelectorAll('.valores')

            function verificar(element){
                  if (element.target.value != '' && element.key === 'Enter'){
                    return true
                  }
                }
                
            function filtrar( element){
                  produtos.forEach(produto => {
                        const nome = produto.children[1].textContent
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

      }


})


const dadosCookie = lerCookie('meuCookieEstoque');

let html = '';

for (let item of dadosCookie) {
  console.log(item.id)
  html += `<div class="valores" data-categoria="${item.categoria}" data-id="${item.id}">
                  <p class="quantidade">${item.quantidade}</p>
                  <p class="nome">${item.nome}</p>
                  <p class="valor">R$ ${item.valor},00</p>
                  <p class="custo">R$ ${item.custo},00</p>
            </div>`
}

addproduto(html)

if(typeof(Number(lerCookie('lucroEstoque'))) === 'number'  && lerCookie('lucroEstoque') != null){
      pLucro.textContent = `R$ ${Number(lerCookie('lucroEstoque')).toFixed(2)}`;
}
if(typeof(Number(lerCookie('investimento'))) === 'number'  && lerCookie('investimento') != null){
      pInvestimento.textContent = `R$ ${Number(lerCookie('investimento')).toFixed(2)}`;
}
if(typeof(Number(lerCookie('quantidade'))) === 'number'  && lerCookie('quantidade') != null){
      pQuantidade.textContent = `${Number(lerCookie('quantidade'))} Peças`;
}

const todosProdutos = document.querySelectorAll('.valores')
todosProdutos.forEach(produto => {
      produto.addEventListener('click', function(){
            modalExcluir.id = ''

            excluir.addEventListener('click', function(){
                  modalExcluir.id = 'escondido'
                  const quantidade = Number(produto.children[0].textContent)
                  const cookieName = "meuCookieEstoque";
                  const cookieValue = lerCookie(cookieName);
                  if (quantidade === 1){
                        const id = produto.dataset.id
                        for (let item of cookieValue){
                              if (Number(item.id) === Number(id)){
                                atualizarCoockieMenos('lucroEstoque', Number(item.valor) - Number(item.custo))
                                atualizarCoockieMenos('investimento', Number(item.custo))
                                atualizarCoockieMenos('quantidade', Number(item.quantidade))
                              
                                const cookieValue = lerCookie(cookieName);
                                let dadosDoCookie = [];
                        
                                const dadossCookie = lerCookie(cookieName);
                                for(let item of dadossCookie){
                                  if(Number(item.id) != Number(id)){
                                    dadosDoCookie.push(item)
                                  }
                                }
                                if (cookieValue) {
                                  try {
                                    dadosDoCookie = JSON.parse(cookieValue);
                                  } catch (error) {
                                    console.error();
                                  }
                                }
                                const novoValor = JSON.stringify(dadosDoCookie);
                                document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                              }
                        }
                        window.location.reload()

                  }else if (quantidade > 1){
                        const id = produto.dataset.id
                        for (let item of cookieValue){
                              if (Number(item.id) === Number(id)){
                                atualizarCoockieMenos('lucroEstoque', (Number(item.valor) - Number(item.custo)) * Number(item.quantidade))
                                atualizarCoockieMenos('investimento', Number(item.custo) * Number(item.quantidade))
                                atualizarCoockieMenos('quantidade', Number(item.quantidade))
                              
                                const cookieValue = lerCookie(cookieName);
                                let dadosDoCookie = [];
                        
                                const dadossCookie = lerCookie(cookieName);
                                for(let item of dadossCookie){
                                  if(Number(item.id) != Number(id)){
                                    dadosDoCookie.push(item)
                                  }
                                }
                                if (cookieValue) {
                                  try {
                                    dadosDoCookie = JSON.parse(cookieValue);
                                  } catch (error) {
                                    console.error();
                                  }
                                }
                                const novoValor = JSON.stringify(dadosDoCookie);
                                document.cookie = `${cookieName}=${encodeURIComponent(novoValor)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
                              }
                        }
                        window.location.reload()
                  }
                  
            })
      })

     
})

const produtos = document.querySelectorAll('.valores')
const inputsBusca = document.querySelectorAll('#busca')

inputsBusca.forEach(inputbusca => {
  inputbusca.addEventListener('keydown', contEvent)
})

add.addEventListener('click', function(){
  modalAdd.classList.add('escondido')
  const inputNome = document.getElementById('nome')
  const inputValor = document.getElementById('valor')
  const inputCusto = document.getElementById('custo')
  const quantidade = document.getElementById('quantidade')
  const categoria = document.getElementById('categoria')

  const cookieName = "meuCookieEstoque";
  const cookieValue = lerCookie(cookieName);
  
  let dadosDoCookie = [];
  const idsGerados = [];

  const dadossCookie = lerCookie(cookieName);
  for(let item of dadossCookie){
    dadosDoCookie.push(item)
    idsGerados.push(item.id)
  }

  function gerarNumeroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function gerarIdUnico() {
      let novoId;
      do {
      novoId = gerarNumeroAleatorio(1000, 9999); 
      } while (idsGerados.includes(novoId));
      return novoId;
  }

  const dadosAtuais =  { id: gerarIdUnico(),  nome: inputNome.value.trim().toLowerCase(), valor: inputValor.value, custo: inputCusto.value, categoria: categoria.value, quantidade: quantidade.value}

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

  if(!cookieExiste('lucroEstoque')){
      const nomeDoCookie = "lucroEstoque";
      const inputValor = document.getElementById('valor')

      const valorDoCookie = (Number(inputValor.value) - Number(inputCusto.value)) * Number(quantidade.value)
      document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

  }else{
      const inputValor = document.getElementById('valor')
      atualizarCoockie('lucroEstoque', (Number(inputValor.value) - Number(inputCusto.value)) * Number(quantidade.value))
  }

  if(!cookieExiste('investimento')){
      const nomeDoCookie = "investimento";

      const valorDoCookie = Number(inputCusto.value) * Number(quantidade.value)
      document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

  }else{
      atualizarCoockie('investimento', Number(inputCusto.value) * Number(quantidade.value))
  }

  
  if(!cookieExiste('quantidade')){
      const nomeDoCookie = "quantidade";

      const valorDoCookie = Number(quantidade.value)
      document.cookie = `${nomeDoCookie}=${encodeURIComponent(valorDoCookie)}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

  }else{
      atualizarCoockie('quantidade', Number(quantidade.value))
  }

  location.reload();
})