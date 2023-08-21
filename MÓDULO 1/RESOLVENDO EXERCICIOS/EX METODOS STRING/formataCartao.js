const numeroCartao = 1234567892346543
let numeroFormatado = ''

if (String(numeroCartao).length === 16){
      let inicio = String(numeroCartao).slice(0,4).padEnd(12, '*')
      let final = String(numeroCartao).slice(12)
      numeroFormatado = (inicio + final)
      

}else{
      console.log('Algo está errado!')
}

console.log(numeroFormatado)