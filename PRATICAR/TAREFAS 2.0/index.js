const fecharModal = document.querySelector('#fecharModal')
const modal = document.querySelector('.modal')
const add = document.querySelector('#add')
const modalAdd = document.querySelector('.addModal')
const fecharAdd = document.querySelector('#fecharAdd')
const confirmar = document.querySelector('#confirmar')
const tarefas = document.querySelector('.tarefas')
const excluirTarefa = document.querySelector('.excluir')
const certeza = document.querySelector('.certeza')
const simApagar = document.querySelector('.simExcluir')
const naoApagar = document.querySelector('.naoExcluir')

let contaTarefas = 0

function atualizarArrayNoCookie(nomeDoCookie, novaArray) {
      // Serialize a nova array para uma string JSON
      var novaArraySerializada = JSON.stringify(novaArray);

      // Atualize o cookie com a nova array
      document.cookie = nomeDoCookie + "=" + novaArraySerializada;
}


function excluirObjetoPorId(nomeDoCookie, idParaExcluir) {
      // Recupere a array de objetos do cookie
      var arrayDoCookie = obterArrayDoCookie(nomeDoCookie);

      // Encontre o índice do objeto com base no id
      var indiceParaExcluir = -1;
      for (var i = 0; i < arrayDoCookie.length; i++) {
            if (arrayDoCookie[i].id === idParaExcluir) {
                  indiceParaExcluir = i;
                  break;
            }
      }

      // Se o objeto foi encontrado, remova-o da array
      if (indiceParaExcluir !== -1) {
            arrayDoCookie.splice(indiceParaExcluir, 1);

            // Atualize o cookie com a nova array
            atualizarArrayNoCookie(nomeDoCookie, arrayDoCookie);

            // O objeto foi excluído com sucesso
            return true;
      } else {
            // O objeto com o id especificado não foi encontrado
            return false;
      }
}

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

function gerarIdAleatorio() {
      // Gere um número aleatório entre 0 e 1 e converta-o em uma string hexadecimal
      // para criar um ID único
      return Math.random().toString(36).substring(2);
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
      if (contaTarefas < 21) {
            modalAdd.id = ''
      } else {
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
      let html = `<div class="tarefa" data-id="${item.id}">
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
            simApagar.addEventListener('click', function () {
                  let id = taref.dataset.id
                  excluirObjetoPorId('cookieTarefas', id)
                  window.location.reload()
            })
      })
)

excluirTarefa.addEventListener('click', function () {
      certeza.id = ''
      modal.id = 'escondido'
})

document.querySelector('#fecharCerteza').addEventListener('click', function () {
      certeza.id = 'escondido'
})


naoApagar.addEventListener('click', function () {
      certeza.id = 'escondido'
})


confirmar.addEventListener('click', function () {
      modalAdd.id = 'esconder'

      const idgerado = gerarIdAleatorio()
      // Objeto que você deseja armazenar no cookie
      let objetoParaArmazenar = { nome: document.querySelector('#inputNome').value, descricao: document.querySelector('#inputDescricao').value, status: document.querySelector('#selectStatus').value, id: idgerado };

      adicionarObjetoAoCookie('cookieTarefas', objetoParaArmazenar)

      window.location.reload()
})