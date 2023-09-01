const array = [1,2,3,4,9]

const resultado = array.some((element) => {
      return element === 5
})

console.log(resultado)

const minhaFuncao = (array) => {
      const resultado = array.some((element) => {
            return element < 15
      })

      console.log(resultado)
}



minhaFuncao(array)