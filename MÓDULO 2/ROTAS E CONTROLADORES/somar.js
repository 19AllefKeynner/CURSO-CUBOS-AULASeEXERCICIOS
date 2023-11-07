function somar(array){
      let valorInicio = 0
      for(let item of array){
            valorInicio += item
      }

      return valorInicio
}

module.exports = {
      somar,
      teste: 2023,
}