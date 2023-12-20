const botoesImagem = document.querySelectorAll('.add-imagem')
const botaoFinalizar = document.querySelector('#finalizar')
const mesasEmpresa = document.querySelector('#mesas-empresa')
const nomeEmpresa = document.querySelector('#nome-empresa')

function criarCookie(nome, valor, diasParaExpirar) {
      var dataExpiracao = new Date();
      dataExpiracao.setTime(dataExpiracao.getTime() + (diasParaExpirar * 24 * 60 * 60 * 1000))
      var expires = "expires=" + dataExpiracao.toUTCString();
      document.cookie = nome + "=" + JSON.stringify(valor) + ";" + expires + ";path=/"
}

function obterCookie(nome) {
      var nomeCookie = nome + "="
      var cookies = document.cookie.split(';')

      for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim()
            if (cookie.indexOf(nomeCookie) == 0) {
                  return cookie.substring(nomeCookie.length, cookie.length)
            }
      }

      return null
}

function cookieExiste(nomeDoCookie) {
      var cookies = document.cookie.split(';');

      for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();

            if (cookie.indexOf(nomeDoCookie + '=') === 0) {
                  return true;
            }
      }

      return false;
}

function definirCookie(dadosDoObjeto) {
      var dadosString = JSON.stringify(dadosDoObjeto);
      document.cookie = "dados=" + dadosString;
      console.log("Cookie definido com sucesso!");
}

var nomeDoCookie = 'nomesCookies';
if (!cookieExiste(nomeDoCookie)) {
      var arrayDeCookies = []
      criarCookie("nomesCookies", arrayDeCookies, 7)
}

let imagemAtual = ''

botoesImagem.forEach(function (botao) {
      botao.addEventListener('click', function () {
            var input = document.createElement('input');
            input.type = 'file';

            input.addEventListener('change', function () {
                  var file = input.files[0];

                  if (file) {
                        var containerProduto = botao.closest('.produto-catalogo');
                        var imagemPreview = containerProduto.querySelector('.imagem-preview-1');
                        var addImagemText = containerProduto.querySelector('.add-imagem-text');

                        // Criar um Blob a partir do arquivo selecionado
                        var blob = new Blob([file], { type: file.type });

                        // Criar uma URL do Blob
                        var blobUrl = URL.createObjectURL(blob);
                        imagemAtual = blobUrl

                        imagemPreview.src = blobUrl;
                        imagemPreview.style.display = 'inline-block'; // Exibe a imagem
                        addImagemText.style.display = 'none';
                  }
            });

            input.click();
      });
});

console.log(imagemAtual)

var botoesAdicionar = document.querySelectorAll('.add-produto')

botoesAdicionar.forEach(function (botao) {
      botao.addEventListener('click', function () {
            var containerProduto = botao.closest('.produto-catalogo')
            var imagemPreview = containerProduto.querySelector('.imagem-preview-1')
            var nomeInput = containerProduto.querySelector('.nome-produto-catalogo')
            var valorInput = containerProduto.querySelector('.valor-produto-catalogo')

            var nomeProduto = nomeInput.value
            var valorProduto = valorInput.value

            if (!nomeProduto || !valorProduto || !imagemPreview.src) {
                  alert('Preencha todos os campos antes de adicionar o produto.')
                  return
            }

            var valorCookie = obterCookie("nomesCookies")
            var arrayDeCookiesRecuperada = JSON.parse(valorCookie) || []
            var novArray = []

            for (let item of arrayDeCookiesRecuperada) {
                  novArray.push(item)
            }

            novArray.push(nomeProduto)
            criarCookie("nomesCookies", novArray, 7)
            botao.classList.add('enviado')

            var objeto = {
                  nome: nomeProduto,
                  valor: valorProduto,
                  imagem: imagemAtual,
            }
            criarCookie(nomeProduto, objeto, 7)
      });
});

botaoFinalizar.addEventListener('click', function () {
      const nome = nomeEmpresa.value
      const mesas = mesasEmpresa.value

      if (!nome || !mesas) {
            alert('Preencha todos os campos antes de finalizar o cadastro!')
            return
      } else {
            const novoObjeto = {
                  nomeEmpresa: nome,
                  quantMesas: mesas
            }
            definirCookie(novoObjeto);
            window.location.href = 'index.html'
      }
})
