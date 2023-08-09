const tela = document.getElementById("mostrador")
const enter = document.getElementById("btn")

enter.addEventListener("click", function(){
      const numero = Number(document.getElementById("numero").value)
      tela.textContent = `Analizando o número digitado posso dizer que, o sucessor dele é ${numero + 1} e o antecessor dele é ${numero - 1}!`
})