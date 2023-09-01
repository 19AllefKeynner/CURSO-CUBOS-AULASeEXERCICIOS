// O sort funciona com ou sem parêmetros, caso nada seja passado ele deverá ordenar a array de acordo com a tabela unicode
// Caso haja parâmetros ele compara os parametros passados através de uma função calbeck
// Sabendo que se o retorno dessa função calback for negativo ele ordena os parâmetros de forma que o primeiro parâmetro venha antes do segundo
// Caso seja positivo o segundo parâmetro vem antes do primeiro

const arrayNumber = [1,1,2,20,43,5,9,7,0]
                  

arrayNumber.sort((a, b) => {
      if (a < b){
            return -1
      }else if (a > b){
            return 1
      }else {
            return 0
      }
})

console.log(arrayNumber)