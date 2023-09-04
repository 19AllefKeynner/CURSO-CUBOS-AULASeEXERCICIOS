const croppeds = document.getElementById('croppeds')
const vestidos = document.getElementById('Vestidos')
const outros = document.getElementById('outros')
const explorar = document.getElementById('explorar')
const explorar2 = document.getElementById('explorar2')

document.addEventListener('DOMContentLoaded', function () {
     
      croppeds.addEventListener('click', function(){
            // Define a string que você deseja armazenar no cookie
            var stringAserArmazenada = "croppeds";

            // Define a data de expiração do cookie (opcional)
            var dataExpiracao = new Date();
            dataExpiracao.setHours(dataExpiracao.getHours() + 24); // Expirará em 24 horas

            // Define o cookie com o nome "oculta-cards"
            document.cookie = "oculta-cards=" + encodeURIComponent(stringAserArmazenada) + "; expires=" + dataExpiracao.toUTCString() + "; path=/";
      })

      vestidos.addEventListener('click', function(){
            // Define a string que você deseja armazenar no cookie
            var stringAserArmazenada = "vestidos";

            // Define a data de expiração do cookie (opcional)
            var dataExpiracao = new Date();
            dataExpiracao.setHours(dataExpiracao.getHours() + 24); // Expirará em 24 horas

            // Define o cookie com o nome "oculta-cards"
            document.cookie = "oculta-cards=" + encodeURIComponent(stringAserArmazenada) + "; expires=" + dataExpiracao.toUTCString() + "; path=/";
      })

      outros.addEventListener('click', function(){
            // Define a string que você deseja armazenar no cookie
            var stringAserArmazenada = "outros";

            // Define a data de expiração do cookie (opcional)
            var dataExpiracao = new Date();
            dataExpiracao.setHours(dataExpiracao.getHours() + 24); // Expirará em 24 horas

            // Define o cookie com o nome "oculta-cards"
            document.cookie = "oculta-cards=" + encodeURIComponent(stringAserArmazenada) + "; expires=" + dataExpiracao.toUTCString() + "; path=/";
      })

      explorar.addEventListener('click', function(){
            // Define a string que você deseja armazenar no cookie
            var stringAserArmazenada = "todos";

            // Define a data de expiração do cookie (opcional)
            var dataExpiracao = new Date();
            dataExpiracao.setHours(dataExpiracao.getHours() + 24); // Expirará em 24 horas

            // Define o cookie com o nome "oculta-cards"
            document.cookie = "oculta-cards=" + encodeURIComponent(stringAserArmazenada) + "; expires=" + dataExpiracao.toUTCString() + "; path=/";
            window.location.href = 'catalogo.html'
      })

      explorar2.addEventListener('click', function(){
            // Define a string que você deseja armazenar no cookie
            var stringAserArmazenada = "todos";

            // Define a data de expiração do cookie (opcional)
            var dataExpiracao = new Date();
            dataExpiracao.setHours(dataExpiracao.getHours() + 24); // Expirará em 24 horas

            // Define o cookie com o nome "oculta-cards"
            document.cookie = "oculta-cards=" + encodeURIComponent(stringAserArmazenada) + "; expires=" + dataExpiracao.toUTCString() + "; path=/";
            window.location.href = 'catalogo.html'
      })

});
    



