const colunaDeMesas = document.querySelector('.lista-menu')
var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)dados\s*=\s*([^;]*).*$)|^.*$/, "$1");
const listaEstoque = document.querySelector('.lista-estoque')

async function testarCaminhoImagem(caminho) {
      return new Promise(function (resolve) {
            var imagem = new Image();
            imagem.onload = function () {
                  resolve(true);
            };
            imagem.onerror = function () {
                  resolve(false);
            };
            imagem.src = caminho;
      });
}

// Exemplo de uso com async/await
async function exemploDeUso(caminhoDaImagem) {
      if (await testarCaminhoImagem(caminhoDaImagem) === true) {
            console.log("sucesso");
      } else {
            console.log("erro");
      }
}

if (cookieValue) {
      var dadosObjeto = JSON.parse(cookieValue);
      console.log(dadosObjeto);

} else {
      console.log("O cookie 'dados' não foi encontrado ou está vazio.");
}


let htmlMesa = `
            <div class="mesa">
                  <button class="vaziaOuNao"><i class="fa-solid fa-users-slash"></i></button>
                  <h2>mesa 02</h2>
                  <div class="alinhar">
                        <div class="pedidos-mesa">
                              <p>Pedidos:</p>
                              <div class="produtos-pedidos">
                                    <p class="produto">Exemplo, R$ 32,00  <button class="entregueNaoEntregue"><i class="fa-solid fa-xmark"></i></button></p>
                                    <p class="produto">Exemplo, R$ 32,00 <button class="entregueNaoEntregue"><i class="fa-solid fa-xmark"></i></button></p>
                              </div>

                        </div>
                        <div class="container-conta-mesa">
                              <label for="conta">Conta:</label>
                              <p>R$ 64,00</p>
                        </div>
                  </div>
                  <div class="butoes-mesa">
                        <button>Adicionar</button>
                        <button>Finalizar</button>
                  </div>
            </div>`


let contMesas = Number(dadosObjeto.quantMesas)

while (contMesas > 0) {
      colunaDeMesas.innerHTML += htmlMesa
      contMesas--
}

const botaoEntregueNaoEntregue = document.querySelectorAll('.entregueNaoEntregue')
const vazioOuNao = document.querySelectorAll('.vaziaOuNao')

let contadorVazioOuNao = 0
vazioOuNao.forEach((vazio) => {
      vazio.addEventListener('click', function () {
            if (contadorVazioOuNao === 0) {
                  vazio.innerHTML = '<i class="fa-solid fa-users"></i>'
                  contadorVazioOuNao++
            } else {
                  vazio.innerHTML = '<i class="fa-solid fa-users-slash"></i>'
                  contadorVazioOuNao = 0
            }
      })
})

let contadorEntregueNaoEntregue = 0
botaoEntregueNaoEntregue.forEach((botao) => {
      botao.addEventListener('click', function () {
            if (contadorEntregueNaoEntregue === 0) {
                  botao.innerHTML = '<i class="fa-solid fa-check"></i>'
                  contadorEntregueNaoEntregue++
            } else {
                  botao.innerHTML = '<i class="fa-solid fa-xmark"></i>'
                  contadorEntregueNaoEntregue = 0
            }
      })
})

var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)nomesCookies\s*=\s*([^;]*).*$)|^.*$/, "$1");
if (cookieValue) {
      var nomesArray = JSON.parse(cookieValue);
      console.log(nomesArray);
} else {
      console.log("O cookie 'nomesCookies' não foi encontrado ou está vazio.");
}

for (let item of nomesArray) {
      var nomeCookieRegexSafe = item.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      var regex = new RegExp(`(?:(?:^|.*;\\s*)${nomeCookieRegexSafe}\\s*=\\s*([^;]*).*$)|^.*$`);

      var cookieValue = document.cookie.replace(regex, "$1");

      if (cookieValue) {
            var objetoCookie = JSON.parse(cookieValue);
            console.log(objetoCookie.img);
     
            if (exemploDeUso(objetoCookie.imagem) === 'sucesso') {
                  const listaEstoque = document.getElementById("listaEstoque");
              
                  listaEstoque.innerHTML +=
                      `<div class="produtoNoEstoque">
                          <div class="imagem">
                              <img src="${objetoCookie.imagem}" alt="">
                          </div>
                          <p class="nomeProduto">${objetoCookie.nome}</p>
                          <p class="precoProduto">R$ ${objetoCookie.valor},00</p>
                          <button id="editarEstoque">Editar <i class="fa-solid fa-pen-to-square"></i></button>
                      </div>`;
            }else{
                  listaEstoque.innerHTML +=
                        `<div class="produtoNoEstoque">
                              <div class="imagem">
                                    <i class="fa-regular fa-image"></i>
                              </div>
                              <p class="nomeProduto">${objetoCookie.nome}</p>
                              <p class="precoProduto">R$ ${objetoCookie.valor},00</p>
                              <button id="editarEstoque">Editar <i class="fa-solid fa-pen-to-square"></i></button>
                        </div>`
            }

      } else {
            console.log(`O cookie ${item} não foi encontrado ou está vazio.`);
      }
}
