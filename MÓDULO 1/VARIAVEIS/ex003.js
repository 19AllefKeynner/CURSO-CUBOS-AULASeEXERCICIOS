const tela = document.getElementById("mostrador")
const enter = document.getElementById("btn")

enter.addEventListener("click", function(){
      const numero = Number(document.getElementById("numero").value)
      tela.textContent = `O dobro dele é ${numero * 2}, o triplo dele é ${numero * 3} e a raiz quadrada é ${(numero ** (1/2))}!`
})