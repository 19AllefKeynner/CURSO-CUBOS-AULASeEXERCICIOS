let telaCima = document.getElementById('mostrador1')
const enter = document.getElementById('btn')
const excluir = document.getElementById('btn2')
const listaP = document.getElementById('btn3')

const lista = []
let conte = 0 


enter.addEventListener("click", function(){
      const peso = String(document.getElementById("numero").value)
      const nome = String(document.getElementById("pessoa").value)
      
      
      const pessoasCadastradas = {

            nome: (nome),
            peso: (peso)
      }

      lista.push(pessoasCadastradas)
      
      listaP.addEventListener("click", function(){
            let conte1 = 0
            let tela = []
            while( conte1 < lista.length){
                  tela.push(`Pessoa ${conte1+1} = `)
                  tela.push(lista[conte1]['nome'])
                  tela.push(lista[conte1]['peso'])
                  tela.push("|")
                  conte1 ++
                  
            }

            let telaTela = tela.toString()
            telaCima.textContent = `${telaTela.replace(/,/g," ")}`
      })
})


            
