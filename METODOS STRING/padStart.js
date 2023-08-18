const cartao = '1234 5678 9876 5432'


function pegarUltimos(numeroDoCartao){
      const inicio = numeroDoCartao.lastIndexOf(' ')
      const ultimos = numeroDoCartao.slice(inicio, numeroDoCartao.length)
      return ultimos
}

function formatar(numeroDoCartao){
      const ultimosDigitos = pegarUltimos(numeroDoCartao) 
      const formatado = ultimosDigitos.padStart(19, '**** ')
      return formatado
}

const formatado = formatar(cartao)
console.log(formatado)