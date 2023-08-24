var lastScrollTop = 0;
const divFixa = document.getElementById('fixa')
const enderecoCity = document.getElementById('city')
const telaNome = document.getElementById('nome')
const ruaTela = document.getElementById('rua')
const frete = document.getElementById('frete')
const valorPix = document.getElementById('valorPix')
const valorTotal = document.getElementById('valorTotal')
const valorProduts = document.getElementById('valorTotalProduts')
const comfirmarCompra2 = document.querySelector('.btn-comfirmar-compra2')
const textovalorFinal = document.getElementById('valorFinal')
const lateral = document.querySelector('.lateral')
const lateralDireita = document.querySelector('.lateral-direita')
const body = document.querySelector('.body')
const btn = document.getElementById('submit')


window.addEventListener("scroll", function() {
  var currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    console.log("Rolagem para baixo");
    divFixa.style.marginTop = `-1060px`
  } else if (currentScrollTop < lastScrollTop) {
    console.log("Rolagem para cima");
    divFixa.style.marginTop = `-1000px`
  }

  lastScrollTop = currentScrollTop;
});



// Função para desserializar uma string JSON para um objeto
function deserializeJSONToObject(jsonStr) {
      return JSON.parse(jsonStr);
    }
    
    // Função para obter um cookie pelo nome
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    
    // Recupera o cookie e desserializa o objeto
    var storedData = getCookie("userDataCookie");
    var deserializedData = deserializeJSONToObject(storedData);
    
    // Acessa os valores individuais do objeto
    var nome = deserializedData.nome;
    var cidade = deserializedData.cidade;
    var numero = deserializedData.numero;
    var estado = deserializedData.estado;
    var rua = deserializedData.rua;
    var cep = deserializedData.cep;
    
    console.log("Cidade:", cidade);
    console.log("Número:", numero);
    console.log("Estado:", estado);
    console.log("Rua:", rua);
    console.log("CEP:", cep);
    console.log("CEP:", nome);

    function pegarEstado (cidade){
          const siglasEstadosBrasil = [
                "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
                "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
                "RS", "RO", "RR", "SC", "SP", "SE", "TO"
              ];
          
          
          const nomesEstadosBrasil = [
                "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
                "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais",
                "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte",
                "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
          ];
    
          const estado = cidade.toLowerCase()
          let contador = 0 
          let indice = 0
    
          for(let siglaEstado of siglasEstadosBrasil){
                if (estado === siglaEstado.toLowerCase()){
                      indice = contador
                }
                contador ++
          }
    
          return (`${nomesEstadosBrasil[indice]}`)
    }


    // Função para ler o cookie
    function lerCookie(nome) {
      var nomeIgual = nome + "=";
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nomeIgual) === 0) {
          return cookie.substring(nomeIgual.length, cookie.length);
        }
      }
      return null;
    }

      // Lendo o cookie e convertendo de volta para um objeto
      var quantidadeArmazenada = lerCookie("quantidade_cookie");
      if (quantidadeArmazenada !== null) {
        console.log("Objeto 'quantidade' armazenado no cookie:", quantidadeArmazenada);
      } else {
        console.log("Nenhum objeto 'quantidade' encontrado no cookie.");
      }
  

    let produtosName = ''
    // Lendo o cookie e convertendo de volta para uma array
    var produtosArmazenadosJSON = lerCookie("produtos");
    if (produtosArmazenadosJSON !== null) {
      var produtosArmazenados = JSON.parse(produtosArmazenadosJSON);
      console.log("Produtos armazenados no cookie:", produtosArmazenados);

      

      let conte = 1
      for ( let item of produtosArmazenados){
        let novaDiv = document.createElement("div");
        novaDiv.classList.add('produtoMeio')

        novaDiv.innerHTML =`
                              <p class="p1">Envio ${conte}</p>
                              <h4>Chegará no seu endereço em até 24 horas </h4>
                              <p class="imagem"><i class="fa-solid fa-image"></i> </p>
                              <p class="produtoNome">${item}</p>
                              <p class="quantidade">quantidade: ${quantidadeArmazenada[item]}</p>
                            `


        let elementoPai = document.getElementById("produtosinformation");
        elementoPai.appendChild(novaDiv);
        console.log(item)
        console.log(produtosName)
        conte ++

        produtosName += `${item} Quantidade (${quantidadeArmazenada[item]})\n`
      }

    } else {
      console.log("Nenhum produto encontrado no cookie.");
    }

    console.log(produtosName)
    city.textContent = `${cidade} , ${pegarEstado(estado)} -  CEP ${cep}`
    city.style.marginLeft = '-103px'
    ruaTela.textContent = `${rua}, ${numero}`
    telaNome.textContent = `${nome.toLowerCase()}`
    telaNome.style.marginLeft = '-214px'

    let fretevalor = 0
    if (cidade.toLowerCase() === "medeiros neto"){
      frete.textContent = 'R$ 10,00'
      fretevalor = 10

    }else if(cidade.toLowerCase() === "teixeira de freitas"){
      frete.textContent = 'R$ 8,00'
      fretevalor = 8
    }

    // Função para ler o cookie
    function lerCookie(nome) {
      var nomeIgual = nome + "=";
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nomeIgual) === 0) {
          return JSON.parse(cookie.substring(nomeIgual.length, cookie.length));
        }
      }
      return null;
    }

  
    
    btn.addEventListener('click', function(){
      inserirValor()
    })

    
    function inserirValor() {
          var valor = `${nome}`;
          const meuNúmeroInput = document.getElementById('meuNumber').value
          document.getElementById("meuInputNome").value = valor;

          var valor = `Endereço cliente:\n\n${cidade}, ${pegarEstado(estado)}-${cep}\n${rua}, ${numero}
          \nContato cliente: ${meuNúmeroInput}
          \nValor total da compra: R$ ${Number(myCookieValue) + fretevalor},00
          \nPrazo de entrega: 24 horas
          \nProdutos:
          \n${produtosName}
          \nNumeração desejada: Não informado!
          `;
          document.getElementById("minhaMensagem").value = valor;
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
}


// Obtém o valor do cookie
var myCookieValue = getCookie("myCookie");

if (myCookieValue !== null) {
      console.log("Valor do cookie:", myCookieValue);

      valorProduts.textContent = `R$ ${myCookieValue},00`
      valorPix.textContent = `R$ ${myCookieValue},00`
      valorTotal.textContent = `R$ ${Number(myCookieValue) + fretevalor},00`

} else {
      console.log("Cookie não encontrado");
}
    



comfirmarCompra2.addEventListener('click', function(){
  window.location.href = 'paginaCompar2.html'

})