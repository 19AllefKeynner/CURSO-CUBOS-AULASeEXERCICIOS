const fecharModal = document.querySelector('#fecharModal')
const modal = document.querySelector('.modal')
const add = document.querySelector('#add')
const modalAdd = document.querySelector('.addModal')
const fecharAdd = document.querySelector('#fecharAdd')
const confirmar = document.querySelector('#confirmar')
const tarefas = document.querySelector('.tarefas')

let contaTarefas = 0

function cookieExiste(nomeDoCookie) {
      // Obtenha todos os cookies
      var cookies = document.cookie.split(';');

      // Percorra a lista de cookies
      for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();

            // Verifique se o cookie começa com o nome desejado
            if (cookie.indexOf(nomeDoCookie + '=') === 0) {
                  return true; // O cookie existe
            }
      }

      return false; // O cookie não existe
}

function adicionarObjetoAoCookie(nomeDoCookie, novoObjeto) {
      // Recupere a lista atual de objetos do cookie
      var cookie = document.cookie;
      var partesDoCookie = cookie.split(';');
      var valorDoCookie = '';

      // Encontre o valor do cookie desejado (neste caso, 'nomeDoCookie')
      for (var i = 0; i < partesDoCookie.length; i++) {
            var parte = partesDoCookie[i].trim();
            if (parte.indexOf(nomeDoCookie + '=') === 0) {
                  valorDoCookie = parte.substring(nomeDoCookie.length + 1, parte.length);
                  break;
            }
      }

      // Desserializar a lista de objetos do cookie para uma array JavaScript
      var listaDeObjetos = JSON.parse(valorDoCookie);

      // Adicione o novo objeto à array
      listaDeObjetos.push(novoObjeto);

      // Serialize a array modificada de volta para uma string JSON
      var listaSerializada = JSON.stringify(listaDeObjetos);

      // Atualize o cookie com o novo valor serializado
      document.cookie = nomeDoCookie + "=" + listaSerializada;
}

function obterArrayDoCookie(nomeDoCookie) {
      var cookies = document.cookie.split(';');

      for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf(nomeDoCookie + '=') === 0) {
                  var valorDoCookie = cookie.substring(nomeDoCookie.length + 1);
                  return JSON.parse(decodeURIComponent(valorDoCookie));
            }
      }

      return []; // Retorna uma array vazia se o cookie não for encontrado
}

fecharModal.addEventListener('click', function () {
      modal.id = 'escondido'
})

add.addEventListener('click', function () {
      if (contaTarefas < 21){
            modalAdd.id = ''
      }else{
            alert('Armazenamento de tarefas esgotado!')
      }
})

fecharAdd.addEventListener('click', function () {
      modalAdd.id = 'esconder'
})


if (!cookieExiste('cookieTarefas')) {
      // Array de objetos que você deseja armazenar no cookie
      var arrayDeObjetos = [

      ];

      // Serializar a array de objetos para uma string JSON
      var arraySerializada = JSON.stringify(arrayDeObjetos);

      // Defina o cookie com a string serializada
      document.cookie = "cookieTarefas=" + arraySerializada;
}


var minhaArrayDeObjetos = obterArrayDoCookie('cookieTarefas');

for (let item of minhaArrayDeObjetos) {
      let html = `<div class="tarefa">
                        <p class="nome">${item.nome}</p>
                        <p class="descricao">${item.descricao}</p>
                        <p class="status">${item.status}</p>
                  </div>
                  `
      tarefas.innerHTML = html 

      contaTarefas += 1
}

const tarefa = document.querySelectorAll('.tarefa')

tarefa.forEach(taref =>
      taref.addEventListener('click', function () {
            modal.id = ''
      })
)

confirmar.addEventListener('click', function () {
      modalAdd.id = 'esconder'

      // Objeto que você deseja armazenar no cookie
      let objetoParaArmazenar = { nome: document.querySelector('#inputNome').value, descricao: document.querySelector('#inputDescricao').value, status: document.querySelector('#selectStatus').value };

      adicionarObjetoAoCookie('cookieTarefas', objetoParaArmazenar)

      window.location.reload()
})