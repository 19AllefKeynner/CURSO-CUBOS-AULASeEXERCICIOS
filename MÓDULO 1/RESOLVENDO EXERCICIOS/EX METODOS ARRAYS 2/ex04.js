const listaNums = [1,4,5,6,87,7,6,65,4,4,7,4,5,67,7]

const listaNums2 = [2,4,6,8,24,40]

function ePar (lista){
      const resultado = lista.every((element)=>{
            return element %2 === 0
      })

      if (resultado === false){
            console.log(`Lista não reconhecida pelo sistema!`)
      }else(
            console.log(`Lista verificada!`)
      )
      
}


ePar(listaNums)

ePar(listaNums2)