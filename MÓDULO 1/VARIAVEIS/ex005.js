const tela = document.getElementById("mostrador")
const tela1 = document.getElementById("mostrador1")
const enter = document.getElementById("btn")

enter.addEventListener("click", function(){
      const frase = String(document.getElementById('frase').value)
      let tamanho = frase.length

      let tamanhoLetras = frase.replace(" ","")

      tela.textContent = `O tamanho da frase digitada é ${tamanho}`
      tela1.textContent = `A quantidade de letras é ${tamanhoLetras.length}`
})

// Caso tenha um espaço no final esse codigo nao funcionará corretamente