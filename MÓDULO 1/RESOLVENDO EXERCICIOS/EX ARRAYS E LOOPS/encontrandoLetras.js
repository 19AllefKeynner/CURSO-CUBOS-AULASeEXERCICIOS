const letras = ['a', 'A', 'B', 'e', 'E', 'i']

const letraDesejada = ['e', 'E'] // isso serve para maiúsculo também!

let contaLetras = 0

const guardaLetras = []
let mensagem = ''

for (let letra of letras){
      for (let a of letraDesejada){
            if (a === letra){
                  contaLetras += 1
                  guardaLetras.push(a)
            }
      }
}

for (let letr of guardaLetras) {
      mensagem += `${letr} `
}

let palavra = contaLetras >= 2 ? 'letras' : 'letra'
let palavra2 = contaLetras >= 2 ? 'estão' : 'está'

if (contaLetras > 0){
      console.log(`Encontramos ${contaLetras} ${palavra}!
aqui ${palavra2}: ${mensagem}`)
      

}else{
      console.log('nenhuma letra das 2 desejadas foram encontardas na lista de letras!')
}
