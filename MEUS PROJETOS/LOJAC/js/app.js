let totalEnviar = 0
let arrayProdutos = []
let preçoIndividual = [];
let id = 0

//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    
    //Agregremos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    //Agregamos funcionalidad al boton Agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked(){
    window.location.href = 'endereço.html'

      // Função para definir um cookie

        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
        
        // Define o cookie com um valor
        var myValue = totalEnviar;
        console.log(totalEnviar)
        setCookie("myCookie", myValue, 30); // O cookie expira em 30 dias

        // Função para criar o cookie

        function criarCookie(nome, valor, dias) {
            var data = new Date();
            data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
            var expires = "expires=" + data.toUTCString();
            document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
        }
        
        // Convertendo a array em uma string JSON
        var produtosJSON = JSON.stringify(arrayProdutos);
        
        // Criando um cookie com a string JSON
        criarCookie("produtos", produtosJSON, 7); // O cookie irá expirar em 7 dias
                       
        var quantidadeItensNoCarrinho = obterQuantidadeItensNoCarrinho();
        console.log(quantidadeItensNoCarrinho);

        // Função para criar o cookie
        function criarCookie(nome, valor, dias) {
            var data = new Date();
            data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
            var expires = "expires=" + data.toUTCString();
            document.cookie = nome + "=" + JSON.stringify(valor) + ";" + expires + ";path=/";
        }
        
        // Exemplo de objeto "quantidade"
        var quantidade = quantidadeItensNoCarrinho
        // Criando um cookie com o objeto "quantidade"
        criarCookie("quantidade_cookie", quantidade, 7); // O cookie irá expirar em 7 dias
        

    }
//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    var div = item.getElementsByClassName('btn-radio')

     // Encontre o elemento de rádio dentro da div com a classe "btn-radio"
     var div = item.getElementsByClassName('btn-radio')[0];
     var radioInput = div.querySelector('input[type="radio"]');
 
     // Acesse o nome do input radio
     var nomeDoRadio = radioInput.name;
 
     console.log("Nome do input radio dentro da div: " + nomeDoRadio);

    agregarItemAlCarrito(titulo, precio, imagenSrc, nomeDoRadio);

    hacerVisibleCarrito();
}

//Funcion que hace visible el carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items =document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc, nomeDoRadio){
    id ++
    var elementosRadio = document.getElementsByName(nomeDoRadio);

    for (var i = 0; i < elementosRadio.length; i++) {
        if (elementosRadio[i].checked) {
        var idSelecionado = elementosRadio[i].id;
        break; // Se um está selecionado, não há necessidade de continuar verificando os outros.
        }
    }



    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
                <input type="radio" name="${nomeDoRadio}-carrinho-${id}" id="${idSelecionado}" class="radio" checked>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    
    arrayProdutos.push(titulo)
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);
    console.log(arrayProdutos)

    //Agregamos la funcionalidad eliminar al nuevo item
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    //Agregmos al funcionalidad restar cantidad del nuevo item
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    //Agregamos la funcionalidad sumar cantidad del nuevo item
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    //Actualizamos total
    actualizarTotalCarrito();

    
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('R$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total)/100;
    console.log(total.toFixed(0))
    totalEnviar = total
    document.getElementsByClassName('carrito-precio-total')[0].innerText = 'R$'+total;

}

function obterQuantidadeItensNoCarrinho() {
    var carritoItems = document.getElementsByClassName('carrito-item');
    var quantidadeItens = {};

    for (var i = 0; i < carritoItems.length; i++) {
        var item = carritoItems[i];
        var tituloElemento = item.getElementsByClassName('carrito-item-titulo')[0];
        var quantidadeItem = item.getElementsByClassName('carrito-item-cantidad')[0].value;

        var titulo = tituloElemento.innerText;
        quantidadeItens[titulo] = parseInt(quantidadeItem);
    }

    return quantidadeItens;
}



const croppedsCard = document.getElementsByClassName('croppeds-femininos');
const vestidosCard = document.getElementsByClassName('vestidos-femininos');
const outrosCard = document.getElementsByClassName('entre-outros');

// Função para ocultar elementos com uma classe específica
function ocultarElementosPorClasse(classe) {
  const elementos = document.getElementsByClassName(classe);
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }
}

function mostrarElementosPorClasse(classe) {
    const elementos = document.getElementsByClassName(classe);
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.display = '';
    }
}


// Função para ler o valor de um cookie por seu nome
function lerCookie(nomeCookie) {
    var nome = nomeCookie + "=";
    var cookies = document.cookie.split(';');
    
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(nome) === 0) {
        return decodeURIComponent(cookie.substring(nome.length, cookie.length));
      }
    }
    return null;
  }
  
  // Lê o valor do cookie "oculta-cards"
  var valorDoCookie = lerCookie("oculta-cards");
  
  if (valorDoCookie !== null) {
    console.log("O valor do cookie 'oculta-cards' é: " + valorDoCookie);
  } else {
    console.log("O cookie 'oculta-cards' não foi encontrado.");
  }
  


if (valorDoCookie === 'croppeds'){
    mostrarElementosPorClasse('croppeds-femininos');
    ocultarElementosPorClasse('vestidos-femininos');
    ocultarElementosPorClasse('entre-outros');
}else if(valorDoCookie === 'vestidos'){
    mostrarElementosPorClasse('vestidos-femininos');
    ocultarElementosPorClasse('entre-outros');
    ocultarElementosPorClasse('croppeds-femininos');
}else if(valorDoCookie === 'outros'){
    mostrarElementosPorClasse('entre-outros');
    ocultarElementosPorClasse('croppeds-femininos');
    ocultarElementosPorClasse('vestidos-femininos');
}else if(valorDoCookie === 'todos'){
    mostrarElementosPorClasse('entre-outros');
    mostrarElementosPorClasse('croppeds-femininos');
    mostrarElementosPorClasse('vestidos-femininos');
}

