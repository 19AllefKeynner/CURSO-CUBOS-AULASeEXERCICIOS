const grausCelsius = [0, 25, 100, -10]

function converterFahrenheit(item){
      return (item * 9/5) + 32
}

function converterTodosParaFahrenheit(array){
      const resultado = array.map(item => {
            return converterFahrenheit(item)
      })

      console.log(resultado)
}


converterTodosParaFahrenheit(grausCelsius)
