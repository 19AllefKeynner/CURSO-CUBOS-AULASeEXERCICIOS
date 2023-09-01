const carros = ['Palio', 'Celta', 'Gol', 'Corolla', 'Uno', 'Golf']
const posicao = 3

function cars(lista, indice){
      console.log(lista.slice(indice, indice + 3))
}


cars(carros, posicao)