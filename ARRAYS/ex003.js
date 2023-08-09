let telaCima = document.getElementById('mostrador1')
let telaBaixo = document.getElementById('mostrador2')
let telaCima1 = document.getElementById('mostrador3')
let telaBaixo1 = document.getElementById('mostrador4')
const enter = document.getElementById('btn')
const parar = document.getElementById('btn2')

let lista = []
let pessoas = []
let maior = []
let menor = []
let menorPessoa = []
let maiorPessoa = []




enter.addEventListener("click", function(){
      contParar = 0
      lista.splice(0,2)
      const numero = Number(document.getElementById('numero').value)
      const pessoa = String(document.getElementById('pessoa').value)
      

      
      lista.push(pessoa)
      lista.push(numero)
      
      

      if (pessoas.length === 0){
            maior = lista[1]
            menor = lista[1]
            maiorPessoa = lista[0]
            menorPessoa = lista[0]
            
      } else{
            if (lista[1] > maior ){
                  maior = lista [1]
                  maiorPessoa = lista[0]
            }
            

            if (lista[1] < menor ){
                  menor = lista[1]
                  menorPessoa = lista[0]
            }
            
      }

      pessoas.push(` ${lista[0]}`)

      
      
      parar.addEventListener("click", function(){
            telaCima.textContent = `Você cadastrou o total de ${pessoas.length} pessoas!`
            telaBaixo.textContent = `O maior peso foi de ${maiorPessoa}, com ${maior}kg!`
            telaCima1.textContent = `O menor peso foi de ${menorPessoa}, com ${menor}kg!`
            telaBaixo1.textContent = `As pessoas cadastradas foram: ${pessoas}!`
      
      })

      

      console.log(maior)
      console.log(menor)
      console.log(maiorPessoa)
      console.log(menorPessoa)
     

      
})


            
