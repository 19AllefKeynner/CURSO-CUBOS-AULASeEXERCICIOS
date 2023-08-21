const valor = '1,330,000,0,0,0,0,0,0'

let transicao = valor.replace(',','.')

while (true){
      if (transicao.indexOf(',') > -1){
            transicao = transicao.replace(',', '.')
      }else{
            break
      }
}


console.log(transicao)