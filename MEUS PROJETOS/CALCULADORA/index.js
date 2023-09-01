function calcularArray(arr) {
      let resultado = 0;
      let operador = '+';
    
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
    
        if (typeof item === 'number') {
          if (operador === '+') {
            resultado += item;
          } else if (operador === '-') {
            resultado -= item;
          } else if (operador === '*') {
            resultado *= item;
          } else if (operador === '/') {
            resultado /= item;
          }
        } else if (typeof item === 'string' && ['+', '-', '*', '/',].includes(item)) {
          operador = item;
        }
      }
    
      return resultado;
}

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')
const btn6 = document.getElementById('btn-6')
const btn7 = document.getElementById('btn-7')
const btn8 = document.getElementById('btn-8')
const btn9 = document.getElementById('btn-9')
const btn0 = document.getElementById('btn-0')
const visor =document.getElementById('tela')

const btnMais = document.getElementById('btn-mais')
const btnMenos = document.getElementById('btn-menos')
const btnVezes = document.getElementById('btn-multiplicar')
const btnDivisão = document.getElementById('btn-divisao')
const btnC = document.getElementById('btn-c')
const resultado = document.getElementById('btn-resultado')

let anterior = []
let digitos = []
let visorTela = ''

btn0.addEventListener('click', function(){
      anterior += 0
      visorTela += 0
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn1.addEventListener('click', function(){
      anterior += 1
      visorTela += 1
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn2.addEventListener('click', function(){
      anterior += 2
      visorTela += 2
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn3.addEventListener('click', function(){
      anterior += 3
      visorTela += 3
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn4.addEventListener('click', function(){
      anterior += 4
      visorTela += 4
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn5.addEventListener('click', function(){
      anterior += 5
      visorTela += 5
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn6.addEventListener('click', function(){
      anterior += 6
      visorTela += 6
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn7.addEventListener('click', function(){
      anterior += 7
      visorTela += 7
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn8.addEventListener('click', function(){
      anterior += 8
      visorTela += 8
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btn9.addEventListener('click', function(){
      anterior += 9
      visorTela += 9
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
})

btnMais.addEventListener('click', function(){
      visorTela += ' + '
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
      digitos.push(Number(anterior))
      digitos.push('+')
      anterior = '' 
})

btnMenos.addEventListener('click', function(){
      visorTela += ' - '
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
      digitos.push(Number(anterior))
      digitos.push('-')
      anterior = '' 
})

btnVezes.addEventListener('click', function(){
      visorTela += ' x '
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
      digitos.push(Number(anterior))
      digitos.push('*')
      anterior = ''
})

btnDivisão.addEventListener('click', function(){
      visorTela += ' / '
      if (visorTela.length > 8){
            const index = visorTela.length - 8
            visor.value = visorTela.slice(index)
      }else{
            visor.value = visorTela
      }
      digitos.push(Number(anterior))
      digitos.push('/')
      anterior = '' 
})

btnC.addEventListener('click', function(){
      anterior = []
      digitos = []
      visorTela = ''
      visor.value = visorTela
      
})

resultado.addEventListener('click', function(){
      digitos.push(Number(anterior))
      const expressao = digitos
      const resultadoFinal = calcularArray(expressao);
      visorTela = String(resultadoFinal)
      visor.value = visorTela
      digitos = []
      anterior = `${resultadoFinal}`

})

