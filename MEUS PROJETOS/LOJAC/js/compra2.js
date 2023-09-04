const textovalorFinal = document.getElementById('valorFinal')

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


            let fretevalor = 0
            if (cidade.toLowerCase() === "medeiros neto"){
                  fretevalor = 10

            }else if(cidade.toLowerCase() === "teixeira de freitas"){
                  fretevalor = 8
            }

            // Obtém o valor do cookie
            var myCookieValue = getCookie("myCookie");

            if (myCookieValue !== null) {
                  console.log("Valor do cookie:", myCookieValue);
                  textovalorFinal.textContent = `4. Digite o valor do produto corretamente: R$ ${Number(myCookieValue) + fretevalor},00`

            } else {
                  console.log("Cookie não encontrado");
            }