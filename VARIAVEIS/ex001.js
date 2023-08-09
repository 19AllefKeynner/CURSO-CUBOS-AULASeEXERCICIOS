let telaCima = document.getElementById('mostrador1')
let telaBaixo = document.getElementById('mostrador2')
const enter = document.getElementById('btn')

enter.addEventListener("click", function(){
      const nota1 = Number(document.getElementById('nota1').value)
      const nota2 = Number(document.getElementById('nota2').value)

      let notasObtidas = `As notas obtidas foram ${nota1} e ${nota2}.`
      let resultado = (nota1 + nota2) / 2 

      telaCima.textContent = notasObtidas
      telaBaixo.textContent = `A média final será ${resultado}`
})
            
// EXERCICIO 001