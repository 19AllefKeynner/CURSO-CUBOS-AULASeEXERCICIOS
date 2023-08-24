var lastScrollTop = 0;
const divFixa = document.getElementById('fixa')
const enderecoCity = document.getElementById('city')
const telaNome = document.getElementById('nome')
const ruaTela = document.getElementById('rua')
const frete = document.getElementById('frete')
const valorPix = document.getElementById('valorPix')
const valorTotal = document.getElementById('valorTotal')
const valorProduts = document.getElementById('valorTotalProduts')
const comfirmarCompra = document.querySelector('.btn-comfirmar-compra')
const comfirmarCompra2 = document.querySelector('.btn-comfirmar-compra2')
const textovalorFinal = document.getElementById('valorFinal')
const lateral = document.querySelector('.lateral')
const lateralDireita = document.querySelector('.lateral-direita')
const body = document.querySelector('.body')


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
                              <p class="quantidade">quantidade: 1</p>
                            `


        let elementoPai = document.getElementById("produtosinformation");
        elementoPai.appendChild(novaDiv);
        console.log(item)
        conte ++
      }

    } else {
      console.log("Nenhum produto encontrado no cookie.");
    }

    
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

  // Obtém o valor do cookie
  var myCookieValue = getCookie("myCookie");

  if (myCookieValue !== null) {
    console.log("Valor do cookie:", myCookieValue);
    valorPix.textContent = `Você pagará: R$ ${myCookieValue},00`
    valorTotal.textContent = `R$ ${Number(myCookieValue) + fretevalor},00`
    valorProduts.textContent = `R$ ${myCookieValue},00`

  } else {
    console.log("Cookie não encontrado");
  }



  comfirmarCompra.addEventListener('click', function(){
      body.style.display = 'flex'
      lateralDireita.style.display = 'none'
      lateral.style.display = 'none'
      console.log('teste')
      textovalorFinal.textContent = `4. Digite o valor do produto corretamente: R$ ${Number(myCookieValue) + fretevalor},00`
  })

  comfirmarCompra2.addEventListener('click', function(){
    body.style.display = 'flex'
    lateralDireita.style.display = 'none'
    lateral.style.display = 'none'
    console.log('teste')
    textovalorFinal.textContent = `4. Digite o valor do produto corretamente: R$ ${Number(myCookieValue) + fretevalor},00`
  })


const textoParaCopiar = "00020126580014BR.GOV.BCB.PIX0136c9d1f76b-9ecb-4c91-9f46-89f124f44f115204000053039865802BR5925Allefe Keiner Souza Silva6009SAO PAULO61080540900062250521xqKTycxwB65SUI71fj764630460D5";

const botaoElement = document.getElementById("botao");

botaoElement.addEventListener("click", () => {
  // Cria um elemento de input para armazenar o texto
  const inputElement = document.createElement("input");
  inputElement.value = textoParaCopiar;
  document.body.appendChild(inputElement);

  // Seleciona o texto no input
  inputElement.select();
  inputElement.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Executa o comando de cópia
  try {
    document.execCommand("copy");
    console.log("Texto copiado: " + textoParaCopiar);
  } catch (err) {
    console.error("Erro ao copiar o texto:", err);
  }

  // Remove o input da página
  document.body.removeChild(inputElement);
})