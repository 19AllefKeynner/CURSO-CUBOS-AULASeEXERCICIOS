const array = [1,4,7,5,9,8,10,23,17]

function funcaoEPar(element){
      if(element % 2 === 0)
            return `${element}: É par`
      else
            return `${element}: É ímpar`
}

const formatar = (lista, funcao) => {
      const resultado = lista.map((element)=>{
            return funcao(element)
      })

      console.log(resultado)
}

formatar(array, funcaoEPar)