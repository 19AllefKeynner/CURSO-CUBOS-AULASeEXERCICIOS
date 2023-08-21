const tela = document.getElementById("mostrador")
const tela1 = document.getElementById("mostrador1")
const tela2 = document.getElementById("mostrador2")
const enter = document.getElementById("btn")

enter.addEventListener("click", function(){
      const numeroMetros = Number(document.getElementById("metros").value)
      tela.textContent = `Esse valor convertido para cm é ${numeroMetros * 100}!`
      tela1.textContent = `Esse valor convertido para km é ${numeroMetros / 1000}!`
      tela2.textContent = `Esse valor convertido para mm é ${numeroMetros * 1000}!`
})